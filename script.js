// Program data: if you add more programs, they will automatically render.
const programs = [
    {
        title: "Digital Rights",
        description: "Learn your online rights and freedom of expression."
    },
    {
        title: "Data Protection",
        description: "Understand how to protect your personal information."
    },
    {
        title: "Online Safety",
        description: "Stay safe from cyberbullying and online harassment."
    },
    {
        title: "Fact Checking",
        description: "Fight misinformation with verification skills."
    },
    {
        title: "Psychosocial Support",
        description: "Access emotional and mental health support."
    }
];

// Render program cards into the "Our Programs" section.
const container = document.getElementById("programContainer");

if (container) {
    programs.forEach((program) => {
        const card = document.createElement("article");
        card.classList.add("program-card");
        card.setAttribute("tabindex", "0");
        card.innerHTML = `
            <h3>${program.title}</h3>
            <p>${program.description}</p>
        `;
        container.appendChild(card);
    });
}

// Smooth scroll to the Programs section when the hero button is clicked.
const exploreBtn = document.getElementById("exploreProgramsBtn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        const section = document.getElementById("programs");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// Enhance UI interactivity once the DOM is ready.
document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation toggle
    const navToggle = document.querySelector(".nav__toggle");
    const navList = document.querySelector(".nav__list");

    if (navToggle && navList) {
        navToggle.addEventListener("click", () => {
            const isOpen = navList.classList.toggle("nav__list--open");
            navToggle.setAttribute("aria-expanded", String(isOpen));
        });

        // Close menu when a nav link is clicked (on small screens)
        navList.addEventListener("click", (event) => {
            const target = event.target;
            if (target instanceof HTMLElement && target.classList.contains("nav__link")) {
                navList.classList.remove("nav__list--open");
                navToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Fade-in animation for sections and program cards.
    const fadeEls = document.querySelectorAll(".section, .program-card, .hero");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    fadeEls.forEach((el) => {
        el.classList.add("fade-in");
        observer.observe(el);
    });

    // Highlight active nav link based on scroll position.
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav__link");

    const setActiveLink = () => {
        let currentId = "";

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
                currentId = section.id;
            }
        });

        navLinks.forEach((link) => {
            const href = link.getAttribute("href") || "";
            const id = href.startsWith("#") ? href.slice(1) : "";

            if (id && id === currentId) {
                link.classList.add("nav__link--active");
            } else {
                link.classList.remove("nav__link--active");
            }
        });
    };

    window.addEventListener("scroll", setActiveLink);
    setActiveLink();

    // Simple front-end form handler for nicer UX.
    const form = document.querySelector(".contact__form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("name");
            const email = document.getElementById("email");

            if (!name.value.trim() || !email.value.trim()) {
                alert("Please fill in your name and email so we can contact you.");
                return;
            }

            alert("Thank you for reaching out to Dada Safe! We will get back to you soon.");
            form.reset();
        });
    }
});
