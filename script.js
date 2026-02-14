// script.js – Dada Safe

(function () {
    'use strict';

    // Smooth scroll for all anchor links (nav + any # links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Hero CTA: scroll to programs
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const programs = document.getElementById('programs');
            if (programs) programs.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // Join Community button
    const joinBtn = document.getElementById('joinBtn');
    if (joinBtn) {
        joinBtn.addEventListener('click', () => {
            alert('Thank you for joining Dada Safe! We\'ll be in touch soon.');
        });
    }

    // Optional: highlight active nav on scroll (Bootstrap 5 compatible)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    function setActiveNav() {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const top = section.offsetTop - 80;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) link.classList.add('active');
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveNav);
    setActiveNav();
})();
