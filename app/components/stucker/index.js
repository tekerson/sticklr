import "./style.less";

export default (stickerBook) => ({
  restrict: "E",
  replace: true,
  controllerAs: "vm",

  scope: {
    stucker: "=",
  },

  controller: () => {
    let style = (coords) => {
      if (coords == null) {
        return;
      }
      return {
        left: coords.x + "px",
        top: coords.y + "px",
      };
    };

    return {
      style
    };
  },

  template: `
    <img class="stucker"
         ng-src="{{stucker.sticker.dataUri}}"
         ng-style="vm.style(stucker.coords)"
         alt="{{stucker.sticker.name}}" />
  `
});
