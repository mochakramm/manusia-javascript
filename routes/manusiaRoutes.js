const express = require('express');
const router = express.Router();
const manusiaController = require('../controllers/manusiaController');

// Menampilkan halaman utama dengan data manusia
router.get('/', manusiaController.index);

// Menambah data manusia baru
router.post('/create', manusiaController.createManusia);

module.exports = router;
