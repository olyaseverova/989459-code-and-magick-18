'use strict';

var PERSONAGES_QUANTITY = 4;

var PERSONAGE_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PERSONAGE_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101,137,164)', 'rgb(241,43,107)', 'rgb(146,100,161)', 'rgb(56,159,117)', 'rgb(215,210,55)', 'rgb(0,0,0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialogElement = document.querySelector('.setup');
userDialogElement.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomArrayItem = function (arr) {
  return arr[window.getRandomInteger(arr.length - 1)];
};

var renderPersonage = function (wizard) {
  var personageElement = similarWizardTemplate.cloneNode(true);

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
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
