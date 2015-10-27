import mkSticker from "sticklr/sticker";

export default (stickerBook) => ({
  restrict: "E",
  controllerAs: "vm",

  scope: {},

  controller: ($scope) => {
    let upload = (sticker) => {
      if (!isValid(sticker)) {
        return;
      }
      stickerBook.addSticker(mkSticker(sticker.name, sticker.dataUri));
      hideUpload();
    };

    let showUpload = () => {
      $scope.showingUpload = true;
    };
    let hideUpload = () => {
      $scope.showingUpload = false;
    };

    let isValid = (sticker) => {
      if (sticker.dataUri == null) {
        return false;
      }
      if (sticker.name == null) {
        return false;
      }
      return true;
    };

    $scope.showingUpload = false;
    $scope.sticker = {
      name: null,
      dataUri: null
    };

    return {
      upload,
      isValid,
      showUpload,
      hideUpload
    };
  },

  template: `
    <div class="sticker-upload">
      <button ng-click="vm.showUpload()" ng-if="!showingUpload">Upload Sticker</button>
      <form ng-submit="vm.upload(sticker)" ng-if="showingUpload">
        <input type="text" name="name" ng-model="sticker.name" />
        <stk-photo-field on-upload="sticker.dataUri = dataUri"></stk-photo-field>
        <button ng-disabled="!vm.isValid(sticker)">Submit</button>
        <button ng-click="vm.hideUpload()">Cancel</button>
      </form>
    </div>
  `
});
