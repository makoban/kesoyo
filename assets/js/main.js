document.addEventListener('DOMContentLoaded', () => {
    // Header stays gray - no scroll color change

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.feature-card, .section-title, .lifestyle-content, .spec-container');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);
});
