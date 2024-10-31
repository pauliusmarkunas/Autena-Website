// window.onbeforeunload = function () {
//   localStorage.setItem("scrollPosition", window.scrollY);
// };

// window.onload = function () {
//   // Retrieve the stored scroll position
//   const scrollPosition = localStorage.getItem("scrollPosition");
//   if (scrollPosition) {
//     // Scroll to the saved position
//     window.scrollTo(0, parseInt(scrollPosition, 10));
//     // Clear the stored position after scrolling
//     localStorage.removeItem("scrollPosition");
//   }
// };
const hamburgerMenuIcon = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".section-links");

hamburgerMenuIcon.addEventListener("click", function (e) {
  mobileMenu.classList.toggle("hide-element");
});
