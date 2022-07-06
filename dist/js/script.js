// Navbar fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Breadcrumb
const breadcrumb = document.getElementById("breadcrumb");
const navMenu = document.getElementById('nav-menu')

breadcrumb.addEventListener("click", () => {
  breadcrumb.classList.toggle("breadcrumb-active");
  navMenu.classList.toggle("hidden");
});