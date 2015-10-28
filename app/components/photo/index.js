import "./style.less";

import mkCoords from "sticklr/coords";

export default (stickerBook) => ({
  restrict: "E",
  replace: true,
  controllerAs: "vm",

  scope: {
    photo: "=",
    stuckers: "=",
    picked: "="
  },

  controller: ($scope) => {
    let stick = (ev) => {
      let x = ev.clientX,
          y = ev.clientY;

      ev.preventDefault();

      if (stickerBook.stick(mkCoords(x,y))) {
        $scope.$emit("sticker.sticked");
      }
    };

    return {
      stick
    };
  },

  template: `
    <div class="photo", ng-mouseup="vm.stick($event)">
      <img ng-src="{{photo.dataUri}}"
           class="base-photo"
           alt="Sticklr Photo" />
      <stk-stucker ng-repeat="stucker in stuckers track by $index"
                   stucker="stucker"></stk-stucker>
      <stk-stucker ng-if="picked" stucker="picked"></stk-stucker>
    </div>
  `
});
