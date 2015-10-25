import "./style.less";

export default () => ({
  restrict: "E",
  replace: true,
  scope: {
    stickers: "="
  },
  template: `
    <div class="sticker-library">
      <h2>Library</h2>
      <ol class="sticker-list">
        <stk-sticker ng-repeat="sticker in stickers track by $index"
                     sticker="sticker">
        </stk-sticker>
      </ol>
      <stk-sticker-upload></stk-sticker-upload>
    </div>
  `
});
