const arrow = document.querySelector(".arrow");
const headerSubMenu = document.querySelector(".bottom-header__sublist");
const burger = document.querySelector(".header__burger");
const navBlockHeader = document.querySelector(".js-nav");
const logo = document.querySelector(".header-top__logo");
const body = document.querySelector("body");
const closeBurgerMenu = document.querySelector(".header-top__close-icon");
const openBottomHeaderArrow = document.querySelector(".bottom-header__arrow");
const bottomHeaderNav = document.querySelector(".bottom-header__nav-1");

arrow.addEventListener("click", function () {
  headerSubMenu.classList.toggle("active");
  arrow.classList.toggle("change-tern");
});

burger.addEventListener("click", function () {
  navBlockHeader.classList.toggle("opened");
  burger.classList.toggle("active");
  body.classList.toggle("lock");
});
closeBurgerMenu.addEventListener("click", function () {
  navBlockHeader.classList.remove("opened");
});

openBottomHeaderArrow.addEventListener("click", function () {
  bottomHeaderNav.classList.toggle("open-bottom-menu");
  openBottomHeaderArrow.classList.toggle("rotate-arrow");
});

/*----OURWORKS CARUSEL--------*/
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  nextBtn.addEventListener("click", function () {
    showSlide(currentIndex + 1);
  });

  prevBtn.addEventListener("click", function () {
    showSlide(currentIndex - 1);
  });

  function showSlide(index) {
    const totalSlides = document.querySelectorAll(".carousel-item").length;

    if (index >= totalSlides) {
      index = 0;
    } else if (index < 0) {
      index = totalSlides - 1;
    }

    currentIndex = index;

    const translateValue = -index * 400 + "px";
    carousel.style.transform = "translateX(" + translateValue + ")";
  }
});
