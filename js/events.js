'use strict';

var SETUP_Y = 80;
var SETUP_X = 50;

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupElement = document.querySelector('.setup');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = setupElement.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.target.classList.contains('setup-user-name')) {
    return;
  }
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setupElement.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupElement.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpenElement.addEventListener('click', function () {
  openPopup();
  setupElement.style.top = SETUP_Y + 'px';
  setupElement.style.left = SETUP_X + '%';
});

setupOpenElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
    setupElement.style.top = SETUP_Y + 'px';
    setupElement.style.left = SETUP_X + '%';
  }
});

setupCloseElement.addEventListener('click', function () {
  closePopup();
});

setupCloseElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var nameInputElement = setupElement.querySelector('.setup-user-name');

nameInputElement.addEventListener('invalid', function (evt) {
  if (!evt.target.classList.contains('setup-wizard-form')) {
    return;
  }
  if (nameInputElement.validity.tooShort) {
    nameInputElement.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (nameInputElement.validity.tooLong) {
    nameInputElement.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (nameInputElement.validity.valueMissing) {
    nameInputElement.setCustomValidity('Обязательное поле');
  } else {
    nameInputElement.setCustomValidity('');
  }
});
