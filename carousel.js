document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const slideInterval = 3000; // Interval in milliseconds
    
    // Selecting necessary elements
    const carouselItems = document.querySelector('.carousel-items');
    const slides = document.querySelectorAll('.carousel-item');
    
    // Initializing variables
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Function to move to the next slide
    function moveToNextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }
    
    // Function to update carousel slide positions
    function updateCarousel() {
      const offset = currentIndex * -100;
      carouselItems.style.transform = `translateX(${offset}%)`;
    }
    
    // Automatically move to next slide at specified interval
    setInterval(moveToNextSlide, slideInterval);
  });
  