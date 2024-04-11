const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navlinks.classList.toggle("open");

  const isOpen = navlinks.classList.contains("open");

  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navlinks.addEventListener("click", (e) => {
  navlinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const headerImage = document.querySelector(".header__image");
headerImage.addEventListener(
  "animationend",
  (e) => {
    setTimeout(() => {
      headerImage.classList.add("reveal");
    });
  },
  { once: true }
);

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".header__content div", {
  ...scrollRevealOption,
  delay: 3000,
});


const scrollRevealOptions = {
  distance: "50px",
  origin: "top",
  duration: 2000,
};
ScrollReveal().reveal(".nav__logo", {
  ...scrollRevealOptions,
  delay: 2000,
  afterReveal: (el) => {
    el.classList.add("bounce"); // Add the bounce class after reveal
  },
});
// ScrollReveal().reveal("nav .nav__links", {
//   ...scrollRevealOptions,
//   delay: 2000,
// });
