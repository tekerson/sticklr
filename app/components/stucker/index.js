import "./style.less";

export default () => ({
  restrict: "E",
  replace: true,

  scope: {
    stucker: "=",
  },

  link: (scope, el) => {
    el.css({
      position: 'absolute',
      left: scope.stucker.coords.x + "px",
      top: scope.stucker.coords.y + "px"
    });
  },

  template: `
    <img class="stucker"
         ng-src="{{stucker.sticker.dataUri}}"
         alt="{{stucker.sticker.name}}" />
  `
});
