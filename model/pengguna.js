class Pengguna {
    constructor(username, nohp, password) {
        this.username = username;
        this.nohp = nohp;
        this.password = password;
        this.isLoggedIn = false;  // Status login pengguna
    }

    // Fungsi login
    login(inputUsername, inputPassword) {
        // Periksa apakah username dan password cocok
        if (inputUsername === this.username && inputPassword === this.password) {
            this.isLoggedIn = true;
            console.log(`${this.username} berhasil login.`);
            return true;
        } else {
            console.log("Login gagal. Username atau password salah.");
            return false;
        }
    }

    // Fungsi logout
    logout() {
        if (this.isLoggedIn) {
            this.isLoggedIn = false;
            console.log(`${this.username} berhasil logout.`);
        } else {
            console.log("Anda belum login.");
        }
    }
}

module.exports  = {Pengguna}
