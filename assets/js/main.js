// Theme Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const icon = themeToggle.querySelector("i");

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
