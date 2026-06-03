document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Fade-in Animation
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(el => observer.observe(el));

    // 2. FAQ Accordion
    const faqButtons = document.querySelectorAll('.faq-q');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            button.classList.toggle('active');
            
            if (button.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });

    // 3. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const globalNav = document.querySelector('.global-nav');
    
    if (menuToggle && globalNav) {
        menuToggle.addEventListener('click', () => {
            const isVisible = globalNav.style.display === 'block';
            globalNav.style.display = isVisible ? 'none' : 'block';
            if (!isVisible) {
                globalNav.style.position = 'absolute';
                globalNav.style.top = '100%';
                globalNav.style.left = '0';
                globalNav.style.width = '100%';
                globalNav.style.backgroundColor = 'rgba(255,255,255,0.95)';
                globalNav.style.padding = '1rem';
                globalNav.style.boxShadow = '0 10px 10px rgba(0,0,0,0.05)';
            }
        });
    }
});
