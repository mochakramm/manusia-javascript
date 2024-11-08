// controllers/manusiaController.js

const { manusia, pria, wanita, saveData } = require('../model/function');  // Mengimpor model dan fungsi
const { manusiaList } = require('../database/db');  // Mengimpor data manusia yang ada

// Menangani GET request untuk halaman utama
exports.index = (req, res) => {
    // Render halaman utama (index.ejs) dengan data manusiaList
    res.render('index', { manusiaList });
};

// Menangani POST request untuk membuat data manusia baru
exports.createManusia = (req, res) => {
    const { nama, usia, kelamin, hobi } = req.body;
    const id = manusiaList.length + 1; // Menghitung ID untuk manusia baru

    // Menentukan jenis kelamin dan membuat objek Pria atau Wanita
    let manusiaBaru;
    if (kelamin === 'pria') {
        manusiaBaru = new pria(nama, parseInt(usia), hobi);
    } else {
        manusiaBaru = new wanita(nama, parseInt(usia), hobi);
    }

    // Tambahkan ID pada objek manusia baru
    manusiaBaru.id = id;

    // Menambahkan manusiaBaru ke dalam array manusiaList
    manusiaList.push(manusiaBaru);

    // Menyimpan data yang telah diperbarui ke dalam file JSON
    saveData();

    // Redirect ke halaman utama setelah berhasil menambah data
    res.redirect('/');
};
