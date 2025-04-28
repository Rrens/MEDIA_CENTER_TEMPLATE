document.addEventListener("DOMContentLoaded", function () {
    fetch("NavbarAdmin.html")
        .then(response => {
            if (!response.ok) throw new Error("Gagal memuat navbar admin");
            return response.text();
        })
        .then(data => {
            document.querySelector(".navbar-admin-container").innerHTML = data;

            // Tambahkan event listener dropdown
            document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
                toggle.addEventListener("click", function (e) {
                    e.preventDefault();

                    // Tutup dropdown lain
                    document.querySelectorAll(".dropdown-menu").forEach(menu => {
                        if (menu !== this.nextElementSibling) {
                            menu.classList.remove("active");
                        }
                    });

                    // Toggle dropdown sendiri
                    const dropdownMenu = this.nextElementSibling;
                    dropdownMenu.classList.toggle("active");
                });
            });

            // Klik di luar menu untuk menutup dropdown
            document.addEventListener("click", function (e) {
                if (!e.target.closest(".dropdown")) {
                    document.querySelectorAll(".dropdown-menu").forEach(menu => {
                        menu.classList.remove("active");
                    });
                }
            });
        })
        .catch(error => console.error(error));
});
