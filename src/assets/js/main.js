'use strict';

var btn = document.querySelector('.header__hamburger');
var container = document.querySelector('.container');
var form = document.querySelector('.form');

btn.addEventListener('click', function () {
  btn.classList.toggle('header_hamburger-active');
  container.classList.toggle('container-active');
  form.classList.toggle('form-acitve');
});