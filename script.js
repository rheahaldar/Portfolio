const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! Your message has been sent.');
    form.reset();
});
// Hero text scroll animation
const heroText = document.querySelector('.hero-text');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const triggerPoint = 100; // adjust this to control when the animation starts

  if (scrollY > triggerPoint) {
    heroText.classList.add('scrolled');
  } else {
    heroText.classList.remove('scrolled');
  }
});
