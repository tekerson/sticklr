import "./style.less";

import mkPhoto from "sticklr/photo";

export default (stickerBook) => ({
  restrict: "E",
  replace: true,
  controllerAs: "vm",

  scope: {},

  controller: () => {
    let upload = (dataUri) => {
      stickerBook.choosePhoto(mkPhoto(dataUri));
    };
    return {
      upload
    };
  },

  template: `
    <form class="photo-upload">
      <label for="photo-upload-field" class="photo-upload-label">Pick a photo</label>
      <stk-photo-field id="photo-upload-field" on-upload="vm.upload(dataUri)"></stk-photo-field>
    </form>
  `
});
