// Theme Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const icon = themeToggle.querySelector("i");
  const backToTop = document.getElementById("back-to-top");

  // Check for saved theme preference or default to 'dark'
  const currentTheme = localStorage.getItem("theme") || "dark";
  body.dataset.theme = currentTheme;
  updateIcon(currentTheme);

  // Toggle theme on button click
  themeToggle.addEventListener("click", function () {
    const currentTheme = body.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    body.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
  });

  // Back to Top visibility on scroll
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const nearBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
    if (scrolled > 300 || nearBottom) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  // Scroll smoothly to top
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Update icon based on theme
  function updateIcon(theme) {
    if (theme === "dark") {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }
});
