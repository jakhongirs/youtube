var elModalToggler = document.querySelector('.site-header__search-button');
var elModal = document.querySelector('.site-header');
var elModalClose = document.querySelector('.site-header--open');

elModalToggler.addEventListener('click', function () {
  elModal.classList.toggle('site-header--open');
});