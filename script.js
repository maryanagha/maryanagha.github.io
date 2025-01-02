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