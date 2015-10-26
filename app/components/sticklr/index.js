import "./style.less";

export default (stickerBook) => ({
  restrict: "E",
  replace: true,
  controllerAs: "vm",

  controller: () => {
    let stickers = stickerBook.stickers;
    let stuckers = stickerBook.stuckers;
    let photo = stickerBook.photo;

    return {
      stickers,
      stuckers,
      photo
    };
  },

  template: `
    <div class="sticklr">
      <stk-photo-area photo="vm.photo()"
                      stuckers="vm.stuckers()">
      </stk-photo-area>
      <stk-sticker-library stickers="vm.stickers()"></stk-sticker-library>
    </div>
  `
});
