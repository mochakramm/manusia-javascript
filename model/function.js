const { manusiaList } = require('../database/db');
const fs = require('fs');

class manusia {
    constructor(nama, usia, kelamin, hobi) {
        this.nama = nama;
        this.usia = usia;
        this.kelamin = kelamin;
        this.hobi = hobi;
    }
    
    bertahanhidup() {
        return `${this.nama} harus bekerja untuk bertahan hidup`;
    }
}

class pria extends manusia {
    constructor(nama, usia, hobi) {
        super(nama, usia, true, hobi);
    }
}

class wanita extends manusia {
    constructor(nama, usia, hobi) {
        super(nama, usia, false, hobi);
    }
}

// Fungsi untuk mendapatkan ID yang unik
const generateUniqueId = (list) => {
    // Cari ID terbesar yang ada di dalam list, lalu tambahkan 1 untuk ID berikutnya
    const maxId = list.reduce((max, item) => (item.id > max ? item.id : max), 0);
    return maxId + 1;
};

// Fungsi untuk menyimpan data dan menambahkan ID unik jika belum ada
const saveData = () => {
    const filePath = './database/data.json';
    
    // Tambahkan ID unik ke setiap item dalam manusiaList jika belum ada
    const updatedData = manusiaList.map(item => {
        if (!item.id) {
            item.id = generateUniqueId(manusiaList);
        }
        return item;
    });

    // Simpan data ke file JSON
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
    console.log("Data berhasil disimpan dengan ID unik.");
};

module.exports = { manusia, pria, wanita, saveData };
