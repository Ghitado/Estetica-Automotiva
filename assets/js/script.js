window.addEventListener("scroll", function() {
  const navMobile = document.querySelector('.navbar-mobile')
  navMobile.classList.toggle("position", this.window.scrollY > 50)
})

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
