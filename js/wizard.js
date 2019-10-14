'use strict';

(function () {

  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomArrayItem = function (arr) {
    return arr[window.getRandomInteger(arr.length - 1)];
  };

  var wizard = {
    onCoatChange: function () {},
    onEyesChange: function () {}
  };

  var setupWizardElement = document.querySelector('.setup-wizard');

  var coatElement = setupWizardElement.querySelector('.wizard-coat');
  coatElement.addEventListener('click', function () {
    var newColor = getRandomArrayItem(COAT_COLORS);
    coatElement.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  var eyesElement = setupWizardElement.querySelector('.wizard-eyes');
  eyesElement.addEventListener('click', function () {
    var newColor = getRandomArrayItem(EYES_COLORS);
    eyesElement.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  var fireballElement = document.querySelector('.setup-fireball-wrap');
  fireballElement.addEventListener('click', function () {
    fireballElement.style.background = getRandomArrayItem(FIREBALL_COLORS);
  });

  window.wizard = wizard;

})();
