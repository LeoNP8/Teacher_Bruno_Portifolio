// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Hamburguer animation
            const spans = hamburger.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Scroll Animations with Intersection Observer
    const animatedElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .fade-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        intersectionObserver.observe(element);
    });

    // Subtle parallax effect on scroll for hero image
    const heroImage = document.querySelector('.avatar');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            if (window.innerWidth > 992) {
                const scrollPos = window.scrollY;
                if (scrollPos < 600) {
                    heroImage.style.transform = `rotate(-2deg) translateY(${scrollPos * 0.05}px)`;
                }
            } else {
                heroImage.style.transform = `rotate(-2deg)`;
            }
        });
    }
});
