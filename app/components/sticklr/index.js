import "./style.less";

export default (stickerBook) => ({
  restrict: "E",
  replace: true,
  controllerAs: "vm",

  controller: () => {
    let stickers = stickerBook.stickers;
    let photo = stickerBook.photo;

    stickerBook.refresh();

    return {
      stickers,
      photo
    };
  },

  template: `
    <div class="sticklr">
      <stk-photo-area photo="vm.photo()"></stk-photo-area>
      <stk-sticker-library stickers="vm.stickers()"></stk-sticker-library>
    </div>
  `
});
