const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { manusia, pria, wanita , saveData} = require('./model/function');
const { manusiaList } = require('./database/db');
const manusiaController = require('./controllers/manusiaController')

const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 8080;


//set up statis file dan view engine
app.use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));



// Menggunakan controller untuk menangani rute
app.get('/', manusiaController.index); // Tampilkan halaman utama
app.post('/create', manusiaController.createManusia); // Route untuk menambah manusia baru


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
