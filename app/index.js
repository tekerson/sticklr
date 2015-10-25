import angular from "angular";

import stickerBook from "sticklr/sticker-book";

import sticklr from "./app";

import "./components";

angular.module("sticklr", ["sticklr-components"])
  .directive("sticklr", ["stickerBook", sticklr])

  .factory("stickerBook", ["$q", stickerBook]);

