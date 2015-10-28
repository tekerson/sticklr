import "./style.less";

export default () => ({
  restrict: "E",
  replace: true,

  scope: {
    sticker: "="
  },

  template: `
    <div class="sticker">
      <div class="name">{{sticker.name}}</div>
    <img class="thumbnail" ng-src="{{sticker.dataUri}}" alt="{{sticker.name}}" />
    </div>
  `
});
