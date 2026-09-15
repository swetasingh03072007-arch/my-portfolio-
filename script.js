```javascript
// ================= TYPING EFFECT =================

const typingText = [
    "Aspiring Data Scientist",
    "AI & ML Enthusiast",
    "Web Developer",
    "B.Tech AI & Data Science Student"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (charIndex < typingText[textIndex].length) {

        typingElement.textContent +=
            typingText[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 80);

    } else {

        setTimeout(deleteEffect, 1500);
    }
}


function deleteEffect() {

    if (charIndex > 0) {

        typingElement.textContent =
            typingText[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteEffect, 50);

    } else {

        textIndex++;

        if (textIndex >= typingText.length) {
            textIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }
}

typeEffect();


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you " + name +
        "! Your message has been received."
    );

    contactForm.reset();

});
```
