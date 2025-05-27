
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("background-video");
    const themeToggle = document.querySelector(".theme-toggle");

    // Insert sun & moon icons
    themeToggle.innerHTML = '<i class="fas fa-sun sun"></i><i class="fas fa-moon moon"></i>';

    // Load saved theme or default to dark
    let currentTheme = localStorage.getItem("theme") || "dark";

    // Function to apply theme and set video path
    function applyTheme(theme) {
        if (theme === "light") {
            document.body.classList.add("light-mode");
            video.src = "/static/videos/homebg_light.mp4";
            themeToggle.classList.add("light");
        } else {
            document.body.classList.remove("light-mode");
            video.src = "/static/videos/homebg.mp4";
            themeToggle.classList.remove("light");
        }

        video.load(); // Load new video source
        video.play().catch((err) => {
            console.warn("Autoplay error:", err);
        });
    }

    applyTheme(currentTheme); // Apply theme on page load

    // Toggle theme on click
    themeToggle.addEventListener("click", () => {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
        applyTheme(currentTheme);
    });

    // Toggle mobile menu
    document.querySelector(".menu-icon").addEventListener("click", () => {
        document.querySelector(".mobile-menu").classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        const menu = document.querySelector(".mobile-menu");
        const menuIcon = document.querySelector(".menu-icon");

        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});

