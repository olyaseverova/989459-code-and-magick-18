'use strict';
(function () {

  var PERSONAGES_QUANTITY = 4;

  var COAT_COLORS = ['rgb(101,137,164)', 'rgb(241,43,107)', 'rgb(146,100,161)', 'rgb(56,159,117)', 'rgb(215,210,55)', 'rgb(0,0,0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupElement = document.querySelector('.setup');

  var similarElement = document.querySelector('.setup-similar-list');
  var wizardTemplateElement = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandomArrayItem = function (arr) {
    return arr[window.getRandomInteger(arr.length - 1)];
  };

  var renderPersonage = function (wizard) {
    var currentWizard = {};
    (function () {
      currentWizard.name = wizard.name;
      currentWizard.colorCoat = wizard.colorCoat;
      currentWizard.colorEyes = wizard.colorEyes;
    })();
    var wizardElement = wizardTemplateElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = currentWizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = currentWizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = currentWizard.colorEyes;

    return wizardElement;
  };

  var loadHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < PERSONAGES_QUANTITY; i++) {
      fragment.appendChild(renderPersonage(wizards[i]));
    }
    similarElement.appendChild(fragment);

    setupElement.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(loadHandler, errorHandler);

  var form = setupElement.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setupElement.classList.add('hidden');
    });
    evt.preventDefault();
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

})();
