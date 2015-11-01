import angular from "angular";

import mkStickerBook from "sticklr/sticker-book";

angular.module("sticklr-lib", [])
  .value("stickerBookFactory", mkStickerBook);
