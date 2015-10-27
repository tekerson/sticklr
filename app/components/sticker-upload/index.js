import mkSticker from "sticklr/sticker";

export default (stickerBook) => ({
  restrict: "E",
  controllerAs: "vm",

  scope: {},

  controller: ($scope) => {
    let upload = (sticker) => {
      if (sticker.dataUri == null) {
        return;
      }
      if (sticker.name == null) {
        return;
      }
      stickerBook.addSticker(mkSticker(sticker.name, sticker.dataUri));
    };

    $scope.sticker = {
      name: null,
      dataUri: null
    };

    return {
      upload
    };
  },

  template: `
    <div class="sticker-upload">
      <form ng-submit="vm.upload(sticker)">
        <input type="text" name="name" ng-model="sticker.name" />
        <stk-photo-field on-upload="sticker.dataUri = dataUri"></stk-photo-field>
        <button>Upload Sticker</button>
      </form>
    </div>
  `
});
