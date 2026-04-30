const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-line"
  );
});

// Close menu when clicking a link
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal setup
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Initialize ScrollReveal
const sr = ScrollReveal(scrollRevealOption);

// Animations
sr.reveal(".header__container h1");
sr.reveal(".header__container p", { delay: 500 });
sr.reveal(".header__container form", { delay: 1000 });
sr.reveal(".feature__card", {duration:1000, interval:500,});
sr.reveal(".destination__card", {duration:1000, interval:500,});
sr.reveal(".package__card", {duration:1000, interval:500,});

const swiper = new Swiper (".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});