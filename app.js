const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session'); // Untuk session pengguna
const manusiaRoutes = require('./routes/manusiaRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

// Set up middleware dan view engine
app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

// Set up session middleware
app.use(session({
    secret: 'mysecret', // Ganti dengan string rahasia Anda
    resave: false,
    saveUninitialized: true
}));

// Menggunakan routes yang telah dibuat
app.use('/', manusiaRoutes); // Rute terkait manusia
app.use('/', authRoutes);    // Rute terkait autentikasi pengguna

// Menjalankan server
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
