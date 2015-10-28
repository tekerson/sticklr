import "./style.less";

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
      reset();
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

    let reset = () => {
      $scope.showingUpload = false;
      $scope.sticker = {
        name: null,
        dataUri: null
      };
    };

    reset();

    return {
      upload,
      isValid,
      showUpload,
      hideUpload
    };
  },

  template: `
    <div class="sticker-upload">
      <button class="upload-button" ng-click="vm.showUpload()">Upload New Sticker</button>
      <div class="upload-form-modal" ng-if="showingUpload">
        <form class="upload-form" ng-submit="vm.upload(sticker)">
          <div class="form-group">
            <label for="sticker-upload-name">Name</label>
            <input type="text" name="name" id="sticker-upload-name" class="form-control" ng-model="sticker.name" />
          </div>

          <div class="form-group">
          <label class="sticker-upload-file-label" ng-class="{'uploaded': sticker.dataUri}"
                 for="sticker-upload-file">Choose file&hellip;</label>
            <stk-photo-field id="sticker-upload-file" on-upload="sticker.dataUri = dataUri"></stk-photo-field>
          </div>

          <button class="submit" ng-disabled="!vm.isValid(sticker)">Upload</button>
          <button class="cancel" ng-click="vm.hideUpload()">Cancel</button>
        </form>
      </div>
    </div>
  `
});
