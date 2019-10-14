'use strict';

(function () {

  var PERSONAGES_QUANTITY = 4;

  window.setupElement = document.querySelector('.setup');
  window.similarElement = document.querySelector('.setup-similar-list');
  var wizardTemplateElement = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var form = window.setupElement.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      window.setupElement.classList.add('hidden');
    });
    evt.preventDefault();
  });

  var renderPersonage = function (wizard) {
    var adaptData = function () {
      return {
        name: wizard.name,
        coat: wizard.colorCoat,
        eyes: wizard.colorEyes
      };
    };
    var currentWizard = adaptData();
    var wizardElement = wizardTemplateElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = currentWizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = currentWizard.coat;
    wizardElement.querySelector('.wizard-eyes').style.fill = currentWizard.eyes;

    return wizardElement;
  };

  window.render = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < PERSONAGES_QUANTITY; i++) {
      fragment.appendChild(renderPersonage(wizards[i]));
    }
    window.similarElement.innerHTML = '';
    window.similarElement.appendChild(fragment);

    window.setupElement.querySelector('.setup-similar').classList.remove('hidden');
  };

})();
