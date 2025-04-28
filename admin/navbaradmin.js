// navbar.js

function toggleDropdown(menu) {
    const dropdown = document.getElementById("dropdown-" + menu);
  
    // Tutup semua dropdown lain
    document.querySelectorAll('.dropdown-menu').forEach(item => {
      if (item !== dropdown) {
        item.classList.remove('active');
      }
    });
  
    // Toggle dropdown yang diklik
    dropdown.classList.toggle('active');
  }
  
  // Klik di luar untuk menutup dropdown
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".has-dropdown")) {
      document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.remove("active"));
    }
  });
  