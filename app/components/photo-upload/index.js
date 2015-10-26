
import mkPhoto from "sticklr/photo";

export default (stickerBook) => ({
  restrict: "E",
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
      <stk-photo-field on-upload="vm.upload(dataUri)"></stk-photo-field>
    </form>
  `
});
