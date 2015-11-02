import { bindActionCreators } from "redux";
import * as actions from "sticklr/actions/sticker-book";

import ng from "angular";

import sticklr from "./sticklr";

import sticker from "./sticker";
import stucker from "./stucker";
import stickerLibrary from "./sticker-library";
import stickerUpload from "./sticker-upload";

import photo from "./photo";
import photoArea from "./photo-area";
import photoUpload from "./photo-upload";
import photoField from "./photo-field";

export default ng.module("sticklr-components", [])
  .factory("stickerStore",
           ["stickerBookFactory",
            (stickerBookFactory) => stickerBookFactory()])

  .factory("stickerBook",
           ["stickerStore",
            (stickerStore) => bindActionCreators(actions, stickerStore.dispatch)])

  .factory("stickerEvents",
           ["stickerStore",
            (stickerStore) => {
              let subscribe = (onChange) => {
                let handleChange = () => { onChange(stickerStore.getState()); };
                return stickerStore.subscribe(handleChange);
              };
              return {
                subscribe
              }
            }])

  .directive("sticklr", ["stickerBook", "stickerEvents", sticklr])

  .directive("stkStucker", stucker)
  .directive("stkSticker", sticker)
  .directive("stkStickerLibrary", stickerLibrary)
  .directive("stkStickerUpload", stickerUpload)

  .directive("stkPhoto", photo)
  .directive("stkPhotoArea", photoArea)
  .directive("stkPhotoUpload", photoUpload)
  .directive("stkPhotoField", photoField);
