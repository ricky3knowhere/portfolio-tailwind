// Navbar fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#toTop");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("fixed");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("fixed");
    toTop.classList.add("hidden");
  }
};

// Breadcrumb
const breadcrumb = document.getElementById("breadcrumb");
const navMenu = document.getElementById("nav-menu");

breadcrumb.addEventListener("click", () => {
  breadcrumb.classList.toggle("breadcrumb-active");
  navMenu.classList.toggle("hidden");
});

// Click on outer breadcrumb
window.addEventListener("click", (e) => {
  if (e.target != breadcrumb && e.target != navMenu) {
    breadcrumb.classList.remove("breadcrumb-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Toggle
const darkToggle = document.querySelector("#darkToggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// move darkmode toggle according mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
