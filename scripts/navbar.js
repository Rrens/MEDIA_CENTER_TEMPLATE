document.addEventListener("DOMContentLoaded", function () {
    // Memuat Navbar
    fetch("Navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
            updateNavbar();
            addProfileDropdownListener();
            addLogoutListener(); // Pastikan tombol logout dapat diklik
        });

    function updateNavbar() {
        console.log("Memeriksa status login...");

        const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
        const username = localStorage.getItem("username") || "User";

        const userProfile = document.getElementById("user-profile");
        const usernameDisplay = document.getElementById("username");
        const registerLink = document.getElementById("registerLink");
        const loginLink = document.getElementById("loginLink");

        if (isAuthenticated) {
            if (registerLink) registerLink.style.display = "none";
            if (loginLink) loginLink.style.display = "none";

            if (userProfile) {
                userProfile.style.display = "flex";
                if (usernameDisplay) usernameDisplay.textContent = username;
            }
        } else {
            if (registerLink) registerLink.style.display = "inline-block";
            if (loginLink) loginLink.style.display = "inline-block";
            if (userProfile) userProfile.style.display = "none";
        }
    }

    function addProfileDropdownListener() {
        const userProfile = document.getElementById("user-profile");
        const dropdownMenu = document.getElementById("user-dropdown-menu");

        if (userProfile && dropdownMenu) {
            userProfile.onclick = function (event) {
                event.stopPropagation();
                dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
            };

            document.addEventListener("click", function (event) {
                if (!userProfile.contains(event.target) && dropdownMenu.style.display === "block") {
                    dropdownMenu.style.display = "none";
                }
            });
        }
    }

    function addLogoutListener() {
        // Ambil semua tombol logout dalam halaman (pastikan menangkap event)
        document.querySelectorAll("#user-dropdown-menu a[href='#']").forEach(button => {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                handleLogout();
            });
        });
    }

    function handleLogout() {
        console.log("Logout ditekan, menghapus localStorage...");
        localStorage.clear();

        // Pastikan UI berubah sebelum redirect
        updateNavbar();

        // Tambahkan jeda untuk memastikan perubahan sebelum pindah halaman
        setTimeout(() => {
            window.location.href = "Login.html";
        }, 500);
    }
});
