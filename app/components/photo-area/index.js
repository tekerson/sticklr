
export default () => ({
  restrict: "E",
  scope: {
    photo: "="
  },
  template: `
    <div class="photo-area">
      <h2>Photo Area</h2>
      <stk-photo-upload ng-if="!photo"></stk-photo-upload>
      <stk-photo ng-if="photo" photo="photo"></stk-photo>
    </div>
  `
});
