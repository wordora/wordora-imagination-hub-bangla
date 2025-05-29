document.addEventListener("DOMContentLoaded", function () {
    // Get references to hamburger and dropdown
    const hamburger = document.getElementById("hamburgerMenu");
    const dropdown = document.getElementById("dropdownMenu");

    // Hide dropdown to start
    dropdown.style.display = "none";

    // Hamburger click: toggle dropdown
    hamburger.addEventListener("click", function (event) {
        event.stopPropagation();
        // Toggle dropdown
        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "flex";
        } else {
            dropdown.style.display = "none";
        }
    });

    // Click outside: close dropdown
    document.addEventListener("click", function (event) {
        if (
            dropdown.style.display === "flex" &&
            !dropdown.contains(event.target) &&
            !hamburger.contains(event.target)
        ) {
            dropdown.style.display = "none";
        }
    });

    // On window resize: close dropdown if width > 768px (optional)
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            dropdown.style.display = "none";
        }
    });

    // Esc key closes dropdown
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            dropdown.style.display = "none";
        }
    });
});
