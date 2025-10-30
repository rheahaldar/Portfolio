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
  const triggerPoint = window.innerHeight * 0.25; // trigger after 25% scroll

  if (scrollY > triggerPoint) {
    heroText.classList.add('scrolled');
  } else {
    heroText.classList.remove('scrolled');
  }
});
