document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById("footer-container");

    if (footerContainer) {
        fetch("Footer.html")
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error("Gagal memuat footer:", error));
    }
});
