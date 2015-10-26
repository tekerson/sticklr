import "./style.less";

import mkCoords from "sticklr/coords";

export default (stickerBook) => ({
  restrict: "E",
  replace: true,
  controllerAs: "vm",

  scope: {
    stickers: "=",
  },

  controller: ($scope) => {
    let pick = (ev, sticker) => {
      ev.preventDefault();
      if (stickerBook.pick(sticker, mkCoords(ev.clientX, ev.clientY))) {
        $scope.$emit("sticker.picked");
      }
    };
    return {
      pick
    };
  },

  template: `
    <div class="sticker-library">
      <h2>Library</h2>
      <stk-sticker-upload></stk-sticker-upload>
      <ol class="sticker-list">
        <stk-sticker ng-repeat="sticker in stickers track by $index"
                     sticker="sticker"
                     ng-mousedown="vm.pick($event, sticker)">
        </stk-sticker>
      </ol>
    </div>
  `
});
