// script.js – Dada Safe

(function () {
    'use strict';

    // Placeholder when images fail to load (no broken icons, keeps layout)
    function getPlaceholderSvg(label, color1, color2) {
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">' +
            '<defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">' +
            '<stop offset="0%" stop-color="' + color1 + '"/>' +
            '<stop offset="100%" stop-color="' + color2 + '"/>' +
            '</linearGradient></defs>' +
            '<rect width="800" height="500" fill="url(%23g)"/>' +
            '<text x="400" y="250" dominant-baseline="middle" text-anchor="middle" fill="rgba(255,255,255,0.95)" font-family="sans-serif" font-size="28" font-weight="bold">' + (label || 'Dada Safe').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</text></svg>';
        return 'data:image/svg+xml,' + encodeURIComponent(svg).replace(/'/g, '%27');
    }

    document.querySelectorAll('main img[src*="images/"]').forEach(function (img) {
        img.addEventListener('error', function () {
            this.onerror = null;
            var color1 = '#7c3aed', color2 = '#ec4899';
            if (this.closest('#programs')) color2 = '#06b6d4';
            this.src = getPlaceholderSvg(this.getAttribute('alt') || 'Dada Safe', color1, color2);
            this.classList.add('img-placeholder');
        });
    });

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
