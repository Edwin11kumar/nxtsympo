document.addEventListener('DOMContentLoaded', () => {
    const timelineElements = document.querySelectorAll('.timeline > div');

    const fadeInOutOnScroll = () => {
        timelineElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementBottom = el.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom >= 0) {
                // Element is in view
                el.style.opacity = 1;
            } else {
                // Element is out of view
                el.style.opacity = 0;
            }
        });
    };

    window.addEventListener('scroll', fadeInOutOnScroll);
    fadeInOutOnScroll(); // Initial check on load
});