// app.js - File JavaScript untuk interaksi pada sisi klien

document.addEventListener('DOMContentLoaded', function () {
    // Mengambil elemen dari DOM
    const loginForm = document.querySelector('#login-form');
    const registerForm = document.querySelector('#register-form');
    
    // Jika form login dikirim
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Mencegah form submit secara default

            // Ambil nilai input form
            const username = document.querySelector('#login-username').value;
            const password = document.querySelector('#login-password').value;

            // Cek apakah input valid (contoh sederhana)
            if (username && password) {
                console.log('Login berhasil dengan username:', username);
                // Lakukan AJAX request atau form submit di sini
                // Misalnya kirim data ke server menggunakan fetch
                // fetch('/login', { method: 'POST', body: JSON.stringify({ username, password }) })
            } else {
                alert('Harap masukkan username dan password!');
            }
        });
    }

    // Jika form register dikirim
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Mencegah form submit secara default

            // Ambil nilai input form
            const username = document.querySelector('#register-username').value;
            const email = document.querySelector('#register-email').value;
            const password = document.querySelector('#register-password').value;

            // Cek apakah input valid
            if (username && email && password) {
                console.log('Registrasi berhasil untuk:', username);
                // Lakukan AJAX request atau form submit di sini
                // Misalnya kirim data ke server menggunakan fetch
                // fetch('/register', { method: 'POST', body: JSON.stringify({ username, email, password }) })
            } else {
                alert('Harap masukkan semua data yang diperlukan!');
            }
        });
    }
});
