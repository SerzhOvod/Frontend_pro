const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots-container');

let currentSlide = 0;

slides.forEach((slide, index) => {
  const dot = document.createElement('span');

  dot.classList.add('dot');

  if (index === 0) {
    dot.classList.add('active');
  }

  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide();
  });

  dotsContainer.append(dot);
});

const dots = document.querySelectorAll('.dot');

nextBtn.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide();
  }
});

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));

  dots.forEach(dot => dot.classList.remove('active'));

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');

  prevBtn.style.display = currentSlide === 0 ? 'none' : 'block';

  nextBtn.style.display = currentSlide === slides.length - 1 ? 'none' : 'block';
}

showSlide();
