function toggleMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", function(event) {
    const menu = document.querySelector(".mobile-menu");
    const menuIcon = document.querySelector(".menu-icon");

    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove("active");
    }
});

// Theme Toggle Function
const video = document.getElementById("background-video");
const themeToggle = document.querySelector(".theme-toggle");

// Create sun & moon icons dynamically inside the button
themeToggle.innerHTML = '<i class="fas fa-sun sun"></i><i class="fas fa-moon moon"></i>';

// Check stored theme preference
let currentTheme = localStorage.getItem("theme") || "dark"; // Default is dark

// Apply saved theme on page load
if (currentTheme === "light") {
    document.body.classList.add("light-mode");
    video.src = "videos/homebg_light.mp4"; // Light mode video
    themeToggle.classList.add("light"); // Move sun up on load
} else {
    document.body.classList.remove("light-mode");
    video.src = "videos/homebg.mp4"; // Dark mode video
    themeToggle.classList.remove("light"); // Move moon up on load
}

// Function to toggle theme with sun-moon animation
function toggleTheme() {
    document.body.classList.toggle("light-mode");
    themeToggle.classList.toggle("light"); // Trigger animation

    if (document.body.classList.contains("light-mode")) {
        // Light Mode
        video.src = "videos/homebg_light.mp4";
        localStorage.setItem("theme", "light"); // Save preference
    } else {
        // Dark Mode
        video.src = "videos/homebg.mp4";
        localStorage.setItem("theme", "dark"); // Save preference
    }

    video.play(); // Ensure video starts playing after switch
}
