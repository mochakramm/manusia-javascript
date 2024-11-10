const Pengguna = require('../models/Pengguna'); // Model untuk pengguna
const bcrypt = require('bcrypt'); // Untuk hashing password
const session = require('express-session'); // Untuk mengelola sesi pengguna

// Konfigurasi sesi di dalam controller (opsional, jika tidak ada di app.js)
const sessionConfig = {
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Atur true jika menggunakan HTTPS
};

// Fungsi registrasi pengguna baru
const register = async (req, res) => {
    const { username, nohp, password } = req.body;

    // Cek apakah username sudah digunakan
    const existingUser = Pengguna.findByUsername(username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username sudah digunakan' });
    }

    // Hash password sebelum menyimpannya
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat pengguna baru dan simpan
    const newUser = new Pengguna(username, nohp, hashedPassword);
    Pengguna.save(newUser);

    res.status(201).json({ message: 'Registrasi berhasil', user: newUser });
};

// Fungsi login pengguna
const login = async (req, res) => {
    const { username, password } = req.body;

    // Cari pengguna berdasarkan username
    const user = Pengguna.findByUsername(username);
    if (!user) {
        return res.status(400).json({ message: 'Username tidak ditemukan' });
    }

    // Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Password salah' });
    }

    // Simpan informasi pengguna ke sesi
    req.session.user = { id: user.id, username: user.username };
    res.status(200).json({ message: 'Login berhasil' });
};

// Fungsi logout pengguna
const logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Gagal logout' });
        }
        res.clearCookie('connect.sid'); // Hapus cookie sesi
        res.status(200).json({ message: 'Logout berhasil' });
    });
};

module.exports = { sessionConfig, register, login, logout };
