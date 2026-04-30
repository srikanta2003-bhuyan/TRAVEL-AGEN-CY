/* =========================
   MOBILE NAVBAR TOGGLE
========================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

  menuBtnIcon.className = isOpen
    ? "ri-close-line"
    : "ri-menu-line";
});



// Close menu when clicking a link
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.className = "ri-menu-line";
});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 200,
  reset: false
};

const sr = ScrollReveal(scrollRevealOption);

// Header
sr.reveal(".header__container h1");
sr.reveal(".header__container p", { delay: 300 });
sr.reveal(".header__container form", { delay: 500 });

// Sections
sr.reveal(".feature__card", { interval: 200 });
sr.reveal(".destination__card", { interval: 200 });
sr.reveal(".package__card", { interval: 200 });
sr.reveal(".discount__container");
sr.reveal(".footer__col", { interval: 200 });


/* =========================
   TESTIMONIAL AUTO SCROLL
   (CIRCULAR LOOP - NO SWIPER)
========================= */

const track = document.querySelector(".testimonial__track");

// Clone cards for smooth infinite loop
if (track) {
  const cards = Array.from(track.children);

  cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });
}


/* =========================
   OPTIONAL: PAUSE ON HOVER
========================= */

const wrapper = document.querySelector(".testimonial__wrapper");

if (wrapper) {
  wrapper.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });

  wrapper.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
}