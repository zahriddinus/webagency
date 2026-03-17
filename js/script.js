const elHumburgerBtn = document.querySelector(".header__hamburger");
const elHeader = document.querySelector(".header");

elHumburgerBtn.addEventListener("click", () => {
  elHeader.classList.toggle("header--open");
});
