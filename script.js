// Small enhancements only (no framework)
(() => {
  // Set current year in footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
