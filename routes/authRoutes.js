const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Menampilkan halaman login
router.get('/login', (req, res) => {
    res.render('login');
});

// Menangani login pengguna
router.post('/login', authController.loginUser);

// Menampilkan halaman registrasi
router.get('/register', (req, res) => {
    res.render('register');
});

// Menangani registrasi pengguna
router.post('/register', authController.registerUser);

// Menangani logout pengguna
router.get('/logout', authController.logoutUser);

module.exports = router;
