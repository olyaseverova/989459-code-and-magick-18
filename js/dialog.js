'use strict';

var setupDialogElement = document.querySelector('.setup');
var dialogHandlerElement = setupDialogElement.querySelector('.upload');

dialogHandlerElement.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
    setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function () {
        evt.preventDefault();
        dialogHandlerElement.removeEventListener('click', onClickPreventDefault);
      };
      dialogHandlerElement.addEventListener('click', onClickPreventDefault);
    }

  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});