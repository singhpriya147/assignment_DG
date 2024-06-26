

const slides = document.querySelectorAll('.img-slide');
const navButtons = document.querySelectorAll('.nav-btn');

let currentSlideIndex = 0;

// Function to show a specific slide and update navigation buttons
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
      navButtons[i].classList.add('active');
    } else {
      slide.classList.remove('active');
      navButtons[i].classList.remove('active');
    }
  });
}

// Function to handle clicking on navigation buttons
navButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
  });
});


setInterval(() => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}, 3000);





const testimonials = [
  {
    image: './assets/camila-cordeiro-haRyBAihS_0-unsplash.jpg',
    review:
      'Absolutely thrilled with our wedding photos! The photographer captured every special moment beautifully. The attention to detail and creativity really shines through in the final shots. Highly recommend their services for anyone looking for stunning wedding photography!',
    user: 'Jasmine Rivera',
  },
  {
    image: './assets/farid-askerov-F1uKnHlRzDc-unsplash.jpg',
    review:
      'Could not  be happier with my personal photoshoot experience! The photographer was incredibly professional and made me feel comfortable throughout the session.Th photos turned out amazing, capturing my personality perfectly. I will  definitely cherish these memories forever. Highly recommend their talent for any personal photoshoot',
    user: 'Lucas Thompson',
  },
  {
    image: './assets/hiroko-yoshii-9y7y26C-l4Y-unsplash.jpg',
    review:
      'An unforgettable scuba photoshoot experience! The photographer expertly captured the magic of the underwater world, from vibrant coral reefs to mesmerizing marine life. The photos are like a dream come true, showcasing the beauty and adventure of scuba diving. Highly recommend this unique photoshoot for anyone looking to capture their underwater adventures in stunning detail!',
    user: 'mike harvey',
  },
 
];

let currentIndex = 0;
const imageElement = document.querySelector('.carousel-image');
const reviewElement = document.getElementById('reviewText');
const userName=document.getElementById('user');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

function updateCarousel() {
  const currentTestimonial = testimonials[currentIndex];
  imageElement.src = currentTestimonial.image;
  reviewElement.textContent = currentTestimonial.review;
  userName.textContent = currentTestimonial.user;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateCarousel();
});

// Initial update to display the first testimonial
updateCarousel();
