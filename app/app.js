
export default (stickerBook) => ({
  restrict: "E",
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
      <h1>Sticklr</h1>
      <stk-sticker-library stickers="vm.stickers()"></stk-sticker-library>
      <stk-photo-area photo="vm.photo()"></stk-photo-area>
    </div>
  `
});
