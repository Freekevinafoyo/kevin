
console.log("PixelCraft Agency Website Loaded");

const button = document.querySelector(".cta-button");

if (button) {
  button.addEventListener("click", function () {
    alert("Thanks for choosing PixelCraft Agency!");
  });
}

const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    if (!href || !href.startsWith("#")) return;

    const targetSection = document.querySelector(href);

    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});