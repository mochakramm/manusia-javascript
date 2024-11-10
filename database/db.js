const fs = require('fs');
const path = require('path');

// Lokasi file JSON tempat data disimpan
const dataFilePath = path.join(__dirname, 'data.json');

// Cek apakah file data sudah ada, jika belum buat file baru
if (!fs.existsSync(dataFilePath)) {
    // Inisialisasi file data.json dengan data kosong atau data awal
    fs.writeFileSync(dataFilePath, JSON.stringify({ pengguna: [], manusia: [] }, null, 2), 'utf8');
}

// Membaca data dari file JSON dan mengembalikannya
const getData = () => {
    const rawData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(rawData);
};

// Menyimpan data ke file JSON
const saveData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
};

// Menyimpan dan mengambil data pengguna
const getPengguna = () => {
    const data = getData();
    return data.pengguna;
};

const savePengguna = (pengguna) => {
    const data = getData();
    data.pengguna.push(pengguna); // Menambahkan pengguna baru ke array pengguna
    saveData(data);
};

// Menyimpan dan mengambil data manusia
const getManusia = () => {
    const data = getData();
    return data.manusia;
};

const saveManusia = (manusia) => {
    const data = getData();
    data.manusia.push(manusia); // Menambahkan manusia baru ke array manusia
    saveData(data);
};

module.exports = { getPengguna, savePengguna, getManusia, saveManusia };
