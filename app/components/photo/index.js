
export default () => ({
  restrict: "E",
  scope: {
    photo: "="
  },
  template: `
    <div class="photo">
      <img ng-src="{{photo.dataUri}}" alt="Sticklr Photo" />
    </div>
  `
});
