document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Daftar pengguna yang valid
        const users = {
            "user@wargaku.com": { name: "User Wargaku", password: "password123" },
            "admin@wargaku.com": { name: "Admin", password: "admin123" },
            "staff@wargaku.com": { name: "Staff Kantor", password: "staffpass" }
        };

        // Cek apakah email terdaftar
        if (users[email] && users[email].password === password) {
            // Simpan status login ke localStorage
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('username', users[email].name); // Simpan nama user
            
            // Redirect ke Home.html
            window.location.href = 'Home.html';
        } else {
            alert('Email atau password salah.');
        }
    });
});
