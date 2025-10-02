// Dark mode logic
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("duwe-theme", document.body.classList.contains("dark") ? "dark" : "light");
}

// Remember theme
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("duwe-theme") === "dark") {
    document.body.classList.add("dark");
  }
});

// Contact alert
function sendMessage(e) {
  e.preventDefault();
  alert("Thanks! Your message has been sent.");
  e.target.reset();
}
