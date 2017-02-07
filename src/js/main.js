
const btn = document.querySelector('.header__hamburger');
const container = document.querySelector('.container');
const form = document.querySelector('.form');

btn.addEventListener('click', function() {
  btn.classList.toggle('header_hamburger-active');
  container.classList.toggle('container-active');
  form.classList.toggle('form-acitve');
});
