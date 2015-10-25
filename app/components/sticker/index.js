
export default () => ({
  restrict: "E",
  scope: {
    sticker: "="
  },
  template: `
    <div class="sticker">
      <img ng-src="{{sticker.dataUri}}" alt="{{sticker.name}} />
      <div class="name">{{sticker.name}}</div>
    </div>
  `
});
