const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("nav__menu--active");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--active");
  });
}

const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("nav__menu--active");
}
navLinks.forEach((n) => n.addEventListener("click", linkAction));

const scrollHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("header--active")
    : header.classList.remove("header--active");
};

window.addEventListener("scroll", scrollHeader);

const sections = document.querySelectorAll(".section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("nav__link--active");
    } else {
      sectionsClass.classList.remove("nav__link--active");
    }
  });
};
window.addEventListener("scroll", scrollActive);
