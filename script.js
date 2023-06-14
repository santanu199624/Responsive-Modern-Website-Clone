const togglebutton = document.getElementById("toggle-bar");
const navLinks = document.getElementById("nav-links");

togglebutton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
})