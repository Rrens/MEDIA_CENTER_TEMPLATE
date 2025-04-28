document.addEventListener("DOMContentLoaded", function () {
    fetch("Navbar.html") // Mengambil file Navbar.html
        .then(response => response.text()) // Mengubahnya menjadi teks
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data; // Menyisipkan ke dalam halaman
        })
        .catch(error => console.error("Terjadi kesalahan saat memuat navbar:", error));
});
