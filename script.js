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

hamburgerMenuIcon.addEventListener("click", function () {
  mobileMenu.classList.toggle("hide-element");
  hamburgerMenuIcon.classList.toggle("fa-bars");
  hamburgerMenuIcon.classList.toggle("fa-xmark");
});

function loadHTMLAfterHeader(filePath) {
  fetch(filePath)
    .then((response) => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Could not load file: ${response.statusText}`);
      }
      return response.text();
    })
    .then((html) => {
      // Locate the header element
      const header = document.querySelector("header");
      if (!header) {
        throw new Error("Header element not found in the document.");
      }

      // Create a container for the HTML content
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      // Insert each element from tempDiv after the <header>
      while (tempDiv.firstChild) {
        header.parentNode.insertBefore(tempDiv.lastChild, header.nextSibling);
      }
    })
    .catch((error) => {
      console.error("Error loading HTML:", error);
    });
}
// loadHTMLAfterHeader("landing.html");
