const OpenMenuToggle = document.getElementById("OpenMenuToggle");
const MenuNavigation = document.getElementById("MenuNavigation");

OpenMenuToggle.addEventListener("click", () => {
  MenuNavigation.classList.toggle("Active");
});
