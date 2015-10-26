import "./style.less";

import mkCoords from "sticklr/coords";

export default (stickerBook) => ({
  restrict: "E",
  replace: true,
  controllerAs: "vm",

  scope: {
    stickers: "=",
  },

  controller: () => {
    let pick = (ev, sticker) => {
      ev.preventDefault();
      stickerBook.pick(sticker, mkCoords(ev.clientX, ev.clientY));
    };
    return {
      pick
    };
  },

  template: `
    <div class="sticker-library">
      <h2>Library</h2>
      <ol class="sticker-list">
        <stk-sticker ng-repeat="sticker in stickers track by $index"
                     sticker="sticker"
                     ng-click="vm.pick($event, sticker)">
        </stk-sticker>
      </ol>
      <stk-sticker-upload></stk-sticker-upload>
    </div>
  `
});
