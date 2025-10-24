// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Form submission alert
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
});


const menu = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("active");
  navbar.classList.toggle("active");
};
