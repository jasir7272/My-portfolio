
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


const savedTheme = localStorage.getItem("jasir-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}

function updateThemeIcon() {
    if (document.body.classList.contains("light-theme")) {
        themeToggle.textContent = "🌙";
    } else {
        themeToggle.textContent = "☀️";
    }
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const currentTheme =
        document.body.classList.contains("light-theme")
        ? "light"
        : "dark";

    localStorage.setItem("jasir-theme", currentTheme);

    updateThemeIcon();
});


menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});


document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});
