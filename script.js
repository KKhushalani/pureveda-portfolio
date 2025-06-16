document.addEventListener("DOMContentLoaded", function () {
  console.log("PureVeda Naturals Portfolio Loaded");

  // Example interactivity
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      alert(`Navigating to ${link.textContent}`);
    });
  });
});