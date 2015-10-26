import mkCoords from "./coords";
import mkSticker from "./sticker";
import mkStucker from "./stucker";

export default function stickerBook (Promise, state) {
  state = state || initialState();

  let stickers = () => state.stickers;
  let stuckers = () => state.stuckers;
  let picked = () => state.picked;
  let photo = () => state.photo;

  let choosePhoto = (photo) => {
    state.photo = photo;
  };
  let reset = () => {
    state.photo = null;
    state.stuckers = [];
  };

  let pick = (sticker, coords) => {
    state.picked = mkStucker(sticker, coords);
    return true;
  };
  let move = (coords) => {
    if (state.picked == null) {
      return false;
    }
    state.picked = mkStucker(state.picked.sticker, coords);
    return true;
  };
  let stick = (coords) => {
    if (state.picked == null) {
      return false;
    }
    state.stuckers.push(mkStucker(state.picked.sticker, coords));
    state.picked = null;
    return true;
  };

  return {
    stickers,
    stuckers,
    picked,
    photo,
    choosePhoto,
    reset,
    pick,
    move,
    stick
  };

}

let initialState = () => {
  let stickers = [
    mkSticker("Something", "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7"),
    mkSticker("Red Dot", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
  ];

  return {
    photo: null,
    picked: null,
    stuckers: [],
    stickers
  };
};
