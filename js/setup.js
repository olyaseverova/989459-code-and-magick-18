'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var PERSONAGES_QUANTITY = 4;

var PERSONAGE_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PERSONAGE_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101,137,164)', 'rgb(241,43,107)', 'rgb(146,100,161)', 'rgb(56,159,117)', 'rgb(215,210,55)', 'rgb(0,0,0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var similarElement = document.querySelector('.setup-similar-list');
var wizardTemplateElement = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomArrayItem = function (arr) {
  return arr[window.getRandomInteger(arr.length - 1)];
};

var renderPersonage = function (wizard) {
  var personageElement = wizardTemplateElement.cloneNode(true);

  personageElement.querySelector('.setup-similar-label').textContent = wizard.name;
  personageElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  personageElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return personageElement;
};

var fragment = document.createDocumentFragment();
for (var k = 0; k < PERSONAGES_QUANTITY; k++) {
  fragment.appendChild(renderPersonage({
    name: getRandomArrayItem(PERSONAGE_NAMES) + ' ' + getRandomArrayItem(PERSONAGE_SURNAMES),
    coatColor: getRandomArrayItem(COAT_COLORS),
    eyesColor: getRandomArrayItem(EYES_COLORS)
  }));
}
similarElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

var setupElement = document.querySelector('.setup');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = setupElement.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.target.classList === 'setup-user-name') {
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
});

setupOpenElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
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
  if (evt.target.classList !== 'setup-wizard-form') {
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

var setupWizardElement = document.querySelector('.setup-wizard');
var coatElement = setupWizardElement.querySelector('.wizard-coat');
var eyesElement = setupWizardElement.querySelector('.wizard-eyes');
var fireballElement = document.querySelector('.setup-fireball-wrap');

coatElement.addEventListener('click', function () {
  coatElement.style.fill = getRandomArrayItem(COAT_COLORS);
});

eyesElement.addEventListener('click', function () {
  eyesElement.style.fill = getRandomArrayItem(EYES_COLORS);
});

fireballElement.addEventListener('click', function () {
  fireballElement.style.background = getRandomArrayItem(FIREBALL_COLORS);
});
