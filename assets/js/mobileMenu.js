document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(
    '[aria-controls="mobile-menu"]'
  );
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOpenIcon = mobileMenuButton.querySelector(".menu-open-icon");
  const menuCloseIcon = mobileMenuButton.querySelector(".menu-close-icon");

  // Ensure the menu is initially collapsed
  mobileMenu.classList.add("hidden");
  mobileMenuButton.setAttribute("aria-expanded", "false");
  menuOpenIcon.classList.remove("hidden");
  menuCloseIcon.classList.add("hidden");

  mobileMenuButton.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", String(!expanded));
    mobileMenu.classList.toggle("hidden");
    menuOpenIcon.classList.toggle("hidden");
    menuCloseIcon.classList.toggle("hidden");
  });
});
