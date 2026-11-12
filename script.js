document.addEventListener("DOMContentLoaded", () => {

  // 1. DARK / LIGHT MODE
  const themeButton = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }

  function updateThemeButton() {
    const isLight = document.body.classList.contains("light-mode");

    themeButton.textContent = isLight ? "🌙" : "☀️";
    themeButton.setAttribute(
      "aria-label",
      isLight ? "Switch to dark mode" : "Switch to light mode"
    );
  }

  updateThemeButton();

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const currentTheme = document.body.classList.contains("light-mode")
      ? "light"
      : "dark";

    localStorage.setItem("portfolio-theme", currentTheme);
    updateThemeButton();
  });

  // 2. ACTIVE NAVIGATION
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  function updateActiveNavigation() {
    let currentSection = "home";

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= 160) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive =
        link.getAttribute("href") === "#" + currentSection;

      link.classList.toggle("active", isActive);
    });
  }

  window.addEventListener("scroll", updateActiveNavigation, {
    passive: true
  });

  updateActiveNavigation();

});