
import mkCoords from "sticklr/coords";

export default (stickerBook) => ({
  restrict: "E",
  controllerAs: "vm",

  scope: {
    photo: "=",
    stuckers: "="
  },

  controller: () => {
    let stick = (ev) => {
      let x = ev.clientX,
          y = ev.clientY;

      ev.preventDefault();

      stickerBook.stick(mkCoords(x,y));
    };

    return {
      stick
    };
  },

  template: `
    <div class="photo", ng-click="vm.stick($event)">
      <img ng-src="{{photo.dataUri}}" alt="Sticklr Photo" />
      <stk-stucker ng-repeat="stucker in stuckers track by $index"
                   stucker="stucker"></stk-stucker>
    </div>
  `
});
