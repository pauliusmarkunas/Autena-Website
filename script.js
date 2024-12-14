// const hamburgerMenuIcon = document.querySelector(".hamburger-icon");
// const mobileMenu = document.querySelector(".section-links");

// hamburgerMenuIcon.addEventListener("click", function () {
//   mobileMenu.classList.toggle("hide-element");
//   hamburgerMenuIcon.classList.toggle("fa-bars");
//   hamburgerMenuIcon.classList.toggle("fa-xmark");
// });

// Selectors
const navMain = document.querySelector("#nav-main");
const navAboutUs = document.querySelector("#nav-about-us");
const navContacts = document.querySelector("#nav-contacts");
const navCtaMain = document.querySelector("#cta-button");
const footerMain = document.querySelector("#footer-main");
const footerAboutUs = document.querySelector("#footer-about-us");
const footerContacts = document.querySelector("#footer-contacts");

function loadHTMLIntoPlaceholder(filePath) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Could not load file: ${response.statusText}`);
      }
      return response.text();
    })
    .then((html) => {
      // Locate the placeholder element with a fixed ID
      const placeholder = document.getElementById("content-placeholder");
      if (!placeholder) {
        throw new Error(
          'Placeholder element with id "content-placeholder" not found.'
        );
      }

      // Inject the HTML into the placeholder
      placeholder.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading HTML:", error);
    });
}

// Prevent default action for all `href="#"` links
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    console.warn("Placeholder link clicked. No action defined.");
  });
});

loadHTMLIntoPlaceholder("landing.html");
// loadHTMLIntoPlaceholder("contacts.html");

// function loadHTMLAfterHeader(filePath) {
//   fetch(filePath)
//     .then((response) => {
//       // Check if the response is successful
//       if (!response.ok) {
//         throw new Error(`Could not load file: ${response.statusText}`);
//       }
//       return response.text();
//     })
//     .then((html) => {
//       // Locate the header element
//       const header = document.querySelector("header");
//       if (!header) {
//         throw new Error("Header element not found in the document.");
//       }

//       // Create a container for the HTML content
//       const tempDiv = document.createElement("div");
//       tempDiv.innerHTML = html;

//       // Insert each element from tempDiv after the <header>
//       while (tempDiv.firstChild) {
//         header.parentNode.insertBefore(tempDiv.lastChild, header.nextSibling);
//       }
//     })
//     .catch((error) => {
//       console.error("Error loading HTML:", error);
//     });
// }

// document.querySelectorAll('a[href="#"]').forEach((link) => {
//   link.addEventListener("click", (event) => {
//     event.preventDefault(); // Prevent the default action (navigation)
//   });
// });

// loadHTMLAfterHeader("landing.html");
// loadHTMLAfterHeader("contacts.html");
