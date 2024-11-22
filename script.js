// Smooth scrolling for elements appearing on scroll
window.addEventListener('scroll', function() {
    document.querySelectorAll('.element').forEach(function(el) {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});

// Scroll up and down buttons
function scrollUp() {
    window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
}

function scrollDown() {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
}
