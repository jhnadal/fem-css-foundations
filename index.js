let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu--icon");
let closeIcon = document.querySelector(".menu--close--icon");
let body = document.querySelector(".body");

menu.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  menu.classList.toggle("menu--hide");
  closeIcon.classList.toggle("close--show");
  body.classList.toggle("body--no-scroll");
});

closeIcon.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  menu.classList.toggle("menu--hide");
  closeIcon.classList.toggle("close--show");
  body.classList.toggle("body--no-scroll");
});
