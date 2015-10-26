import "./style.less";

import mkCoords from "sticklr/coords";

export default (stickerBook) => ({
  restrict: "E",
  replace: true,
  controllerAs: "vm",

  controller: ($scope, $document) => {
    let stickers = stickerBook.stickers;
    let stuckers = stickerBook.stuckers;
    let picked = stickerBook.picked;
    let photo = stickerBook.photo;

    let move = (ev) => {
      let x = ev.clientX,
          y = ev.clientY;
      $scope.$apply(stickerBook.move(mkCoords(x, y)));
    };

    $scope.$on("sticker.picked", () => {
      $document.on("mousemove", move);
    });
    $scope.$on("sticker.sticked", () => {
      $document.off("mousemove", move);
    });

    return {
      stickers,
      stuckers,
      picked,
      photo
    };
  },

  template: `
    <div class="sticklr">
      <stk-photo-area photo="vm.photo()"
                      stuckers="vm.stuckers()"
                      picked="vm.picked()">
      </stk-photo-area>
      <stk-sticker-library stickers="vm.stickers()"></stk-sticker-library>
    </div>
  `
});
