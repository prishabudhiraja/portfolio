// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Navbar shadow
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("shadow-lg", window.scrollY > 10);
});

// Hamburger toggle
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
}

// Typing animation
const textArray = [
    "B.Tech Student",
    "Aspiring Software Developer",
    "Data Enthusiast",
    "Web Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");

    if (index < textArray.length) {
        if (!isDeleting && charIndex <= textArray[index].length) {
            currentText = textArray[index].substring(0, charIndex++);
        } else if (isDeleting && charIndex >= 0) {
            currentText = textArray[index].substring(0, charIndex--);
        }

        typing.innerHTML = currentText;

        if (!isDeleting && charIndex === textArray[index].length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index++;
            if (index === textArray.length) index = 0;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();