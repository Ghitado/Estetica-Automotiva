window.addEventListener("scroll", function() {
  const nav = document.querySelector('.header')
  nav.classList.toggle("sticky", this.window.scrollY > 0)
})