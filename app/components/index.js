import ng from "angular";

import sticker from "./sticker";
import stickerLibrary from "./sticker-library";
import stickerUpload from "./sticker-upload";

import photo from "./photo";
import photoArea from "./photo-area";
import photoUpload from "./photo-upload";

export default ng.module("sticklr-components", [])

  .directive("stkSticker", sticker)
  .directive("stkStickerLibrary", stickerLibrary)
  .directive("stkStickerUpload", stickerUpload)

  .directive("stkPhoto", photo)
  .directive("stkPhotoArea", photoArea)
  .directive("stkPhotoUpload", photoUpload);

