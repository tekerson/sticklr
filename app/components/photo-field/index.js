
export default ($parse) => ({
  restrict: "E",
  replace: true,
  controllerAs: "vm",

  scope: {
    uploaded: '&onUpload'
  },

  controller: ($scope) => {
    let uploaded = (ev, dataUri) => {
      $scope.uploaded({ $event: ev, dataUri });
    };
    return {
      uploaded
    };
  },

  link: (scope, el, attrs, ctrl) => {
    let upload = (ev) => {
      let files = ev.target.files;
      if (files.length === 0) {
        return;
      }
      let file = files.item(0);

      if (!file.type.match('image.*')) {
        return;
      }

      let reader = new FileReader();
      reader.onload = (e) => {
        scope.$apply(() => {
          ctrl.uploaded(e, e.target.result)
        });
      };

      reader.readAsDataURL(file);
    };

    el.on("change", upload);
    scope.$on("$destroy", () => { el.off("change", upload); });
  },

  template: `
    <input type="file" class="photo-field" />
  `
});
