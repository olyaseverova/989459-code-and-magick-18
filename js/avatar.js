'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var avatarChooserElement = document.querySelector('.upload input[type=file]');
  var avatarElement = document.querySelector('.setup-user-pic');

  var uploadPhotos = function (chooser, preview) {
    var file = chooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  };

  avatarChooserElement.addEventListener('change', function () {
    uploadPhotos(avatarChooserElement, avatarElement);
  });
})();
