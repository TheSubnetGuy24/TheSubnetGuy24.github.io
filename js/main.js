document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // 🔹 Efecto de scroll: añade sombra al navbar cuando se baja
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  // 🔹 Menú hamburguesa responsive
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("show");
  });

  // 🔹 Cierra el menú cuando se hace clic en un enlace
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("show");
    });
  });

  // 🔹 Marca la página actual en el navbar (opcional)
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
