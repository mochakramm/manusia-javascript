const { manusiaList } = require('../database/db');
const { pria, wanita, saveData } = require('../models/function'); // Pastikan file function.js berada di folder models

// Controller untuk menampilkan daftar semua manusia
const index = (req, res) => {
    // Mengirimkan data manusiaList ke view 'index'
    res.render('index', { manusiaList });
};

// Controller untuk menambahkan manusia baru
const createManusia = (req, res) => {
    const { nama, usia, kelamin, hobi } = req.body;

    // Menentukan ID unik
    const id = manusiaList.length > 0 ? manusiaList[manusiaList.length - 1].id + 1 : 1;

    // Buat objek berdasarkan jenis kelamin (pria/wanita)
    let manusiaBaru;
    if (kelamin === 'pria') {
        manusiaBaru = new pria(nama, parseInt(usia), hobi);
    } else {
        manusiaBaru = new wanita(nama, parseInt(usia), hobi);
    }

    // Tambahkan ID ke objek manusiaBaru
    manusiaBaru.id = id;

    // Tambahkan manusia baru ke dalam array dan simpan ke file
    manusiaList.push(manusiaBaru);
    saveData();

    // Redirect ke halaman utama setelah menambah manusia
    res.redirect('/');
};

module.exports = {
    index,
    createManusia
};
