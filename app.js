const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { manusia, pria, wanita } = require('./function');
const { manusiaList, saveData } = require('./database/db');

const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

// Tampilkan halaman utama dan data manusia yang sudah dibuat
app.get('/', (req, res) => {
    res.render('index', { manusiaList });
});

// Route untuk menangani input form dan membuat data manusia
app.post('/create', (req, res) => {
    const { nama, usia, kelamin, hobi } = req.body;
    const id = manusiaList.length + 1;

    // Buat instance Pria atau Wanita berdasarkan input kelamin
    let manusiaBaru;
    if (kelamin === 'pria') {
        manusiaBaru = new pria(nama, parseInt(usia), hobi);
    } else {
        manusiaBaru = new wanita(nama, parseInt(usia), hobi);
    }

    // Tambahkan ID ke objek manusiaBaru
    manusiaBaru.id = id;

    // Tambah ke array dan simpan ke file JSON
    manusiaList.push(manusiaBaru);
    saveData();

    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
