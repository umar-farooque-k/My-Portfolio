function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

/*document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('menu-open'); // Closes menu
    });
});*/

const darkModeToggle = document.getElementById("dark-mode-toggle");
const themeIcon = document.getElementById("theme-icon");

// Toggle dark mode
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeIcon.src = "/assests/sun.png";  // Change to sun icon
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.src = "/assests/moon.png";  // Change to moon icon
        localStorage.setItem("theme", "light");
    }
});

// Load theme preference on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.src = "/assests/sun.png";  // Keep sun icon if dark mode is active
}

