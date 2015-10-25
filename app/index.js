import angular from "angular";

import stickerBook from "sticklr/sticker-book";

import "./components";

angular.module("sticklr", ["sticklr-components"])
  .factory("stickerBook", ["$q", stickerBook]);

