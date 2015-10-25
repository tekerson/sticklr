import angular from "angular";

import stickerBook from "sticklr/sticker-book";

angular.module("sticklr-lib", [])
  .factory("stickerBook", ["$q", stickerBook]);
