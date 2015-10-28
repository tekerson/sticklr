
import "./style.less";

export default (stickerBook) => ({
  restrict: "E",
  replace: true,
  controllerAs: "vm",

  scope: {
    photo: "=",
    stuckers: "=",
    picked: "="
  },

  controller: () => {
    let reset = () => {
      stickerBook.reset();
    };
    return {
      reset
    };
  },

  template: `
    <div class="photo-area">
      <stk-photo-upload ng-if="!photo"></stk-photo-upload>
      <button class="reset-button"
              ng-if="photo"
              ng-click="vm.reset()">
        Start Over
      </button>
      <stk-photo ng-if="photo"
                 photo="photo"
                 stuckers="stuckers"
                 picked="picked">
      </stk-photo>
    </div>
  `
});
