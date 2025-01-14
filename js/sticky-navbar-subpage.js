// Select the header and hero section elements
const header = document.querySelector('.navbar'); // Adjust selector if needed
const articleImage = document.querySelector('.article-image');

// Calculate the point at which the header should become sticky
const stickyPoint = articleImage.offsetHeight * 0.1;

// Add a scroll event listener
window.addEventListener('scroll', () => {
    // Check if the page has been scrolled past the hero section
    if (window.scrollY >= stickyPoint) {
        header.classList.add('sticky'); // Add sticky class
    } else {
        header.classList.remove('sticky'); // Remove sticky class
    }
});