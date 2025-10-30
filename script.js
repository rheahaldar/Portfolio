const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! Your message has been sent.');
    form.reset();
});
