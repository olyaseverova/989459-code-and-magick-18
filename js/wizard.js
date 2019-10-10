'use strict';

(function () {

  var COAT_COLORS = ['rgb(101,137,164)', 'rgb(241,43,107)', 'rgb(146,100,161)', 'rgb(56,159,117)', 'rgb(215,210,55)', 'rgb(0,0,0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var setupWizardElement = document.querySelector('.setup-wizard');
  var coatElement = setupWizardElement.querySelector('.wizard-coat');
  var eyesElement = setupWizardElement.querySelector('.wizard-eyes');
  var fireballElement = document.querySelector('.setup-fireball-wrap');

  var getRandomArrayItem = function (arr) {
    return arr[window.getRandomInteger(arr.length - 1)];
  };

  coatElement.addEventListener('click', function () {
    coatElement.style.fill = getRandomArrayItem(COAT_COLORS);
  });

  eyesElement.addEventListener('click', function () {
    eyesElement.style.fill = getRandomArrayItem(EYES_COLORS);
  });

  fireballElement.addEventListener('click', function () {
    fireballElement.style.background = getRandomArrayItem(FIREBALL_COLORS);
  });

  window.setupElement = document.querySelector('.setup');
  window.similarElement = document.querySelector('.setup-similar-list');
  window.wizardTemplateElement = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  window.wizard = wizard;

})();
