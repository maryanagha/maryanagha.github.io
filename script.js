function adjustSectionHeight() {
    const parentHeight = document.documentElement.clientHeight;
    const sections = document.querySelectorAll('.scrollsec');
    sections.forEach(section => {
        section.style.height = `${parentHeight}px`;
    });
}

// Adjust on load
adjustSectionHeight();

// Adjust on resize
window.addEventListener('resize', adjustSectionHeight);

const scrollableDiv = document.querySelector('.scrollablemain');
const topMessage = document.querySelector('.top-message');

scrollableDiv.addEventListener('scroll', () => {
    if (scrollableDiv.scrollTop < 100) {
        topMessage.style.display = 'flex';
    } else {
        topMessage.style.display = 'none';
    }
});

topMessage.addEventListener('click', () => {
    scrollableDiv.scrollTo({
        top: scrollableDiv.scrollTop + scrollableDiv.scrollHeight * 0.3,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('p');
    let observerOptions = { threshold: 0.1 };
    let queue = [];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !queue.includes(entry.target)) {
                queue.push(entry.target);
                if (queue.length === 1) {
                    animateQueue();
                }
            }
        });
    }, observerOptions);

    paragraphs.forEach((p) => {
        p.style.opacity = 0;
        p.style.transition = 'opacity 0.5s';
        observer.observe(p);
    });

    function animateQueue() {
        if (queue.length === 0) return;
        let current = queue.shift();
        current.style.display = 'block';
        current.style.opacity = 1;
        setTimeout(animateQueue, 600);
    }
});