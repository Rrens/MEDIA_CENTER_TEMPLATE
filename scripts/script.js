document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk memuat file eksternal (Navbar & Footer)
    function loadComponent(id, file, callback) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
                if (callback) callback(); // Menjalankan callback setelah elemen dimuat
            })
            .catch(error => console.error("Gagal memuat " + file, error));
    }

    // Muat Navbar & inisialisasi dropdown setelahnya
    loadComponent("navbar-container", "navbar.html", setupDropdown);

    // Muat Footer
    loadComponent("footer-container", "footer.html");

    // Fungsi untuk mengatur dropdown menu agar tetap terbuka saat diklik
    function setupDropdown() {
        const dropdownToggle = document.querySelector(".dropdown-toggle");
        const dropdownMenu = document.querySelector(".dropdown-menu");

        if (dropdownToggle && dropdownMenu) {
            dropdownToggle.addEventListener("click", function (event) {
                event.preventDefault(); // Mencegah reload halaman
                dropdownMenu.classList.toggle("active"); // Toggle class active
            });

            // Agar dropdown tetap terbuka jika diklik di dalamnya
            dropdownMenu.addEventListener("click", function (event) {
                event.stopPropagation();
            });

            // Menutup dropdown jika klik di luar dropdown & tombolnya
            document.addEventListener("click", function (event) {
                if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                    dropdownMenu.classList.remove("active");
                }
            });
        }
    }
});
