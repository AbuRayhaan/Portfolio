const hamburger = document.querySelector('.hamburger');
const toggleMenu = document.querySelector('.toggle');
const headline = document.querySelector ('.headline');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  toggleMenu.classList.toggle('active');
  headline.classList.toggle('active');
});

document.querySelectorAll('.toggle-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  toggleMenu.classList.remove('active');
  headline.classList.remove('active');
}));