let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

const updateCarousel = () => {
    const offset = -currentIndex * 100;  // Calculate the correct offset
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

    // Update indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
};

const changeSlide = (direction) => {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = totalImages - 1; // Wrap to last image if going backward
    if (currentIndex >= totalImages) currentIndex = 0;  // Wrap to first image if going forward
    updateCarousel();
};

const goToSlide = (index) => {
    currentIndex = index;
    updateCarousel();
};

// Initialize
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));
document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
});

updateCarousel();  // Run on page load to set the initial state