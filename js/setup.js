'use strict';

var WIZARDS_QUANTITY = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var PERSONAGE_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PERSONAGE_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101,137,164)', 'rgb(241,43,107)', 'rgb(146,100,161)', 'rgb(56,159,117)', 'rgb(215,210,55)', 'rgb(0,0,0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var randomArrayItem = function (arr) {
  return arr[randomInteger(arr.length - 1)];
};

for (var i = 0; i < WIZARDS_QUANTITY; i++) {
  var personageElement = similarWizardTemplate.cloneNode(true);
  personageElement.querySelector('.setup-similar-label').textContent = randomArrayItem(PERSONAGE_NAMES) + ' ' + randomArrayItem(PERSONAGE_SURNAMES);
  personageElement.querySelector('.wizard-coat').style.fill = randomArrayItem(COAT_COLORS);
  personageElement.querySelector('.wizard-eyes').style.fill = randomArrayItem(EYES_COLORS);
  similarListElement.appendChild(personageElement);
}

document.querySelector('.setup-similar').classList.remove('hidden');
