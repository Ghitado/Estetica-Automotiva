$("head").load('../../components/head.html');
$("#header").load('../../components/header.html');
$("#contact").load('../../components/contact.html');
$("#footer").load('../../components/footer.html');


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
