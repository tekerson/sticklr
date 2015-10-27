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

  let addSticker = (sticker) => {
    state.stickers.push(sticker);
    return true;
  };

  let pick = (sticker, coords) => {
    if (state.photo == null) {
      return false;
    }
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
    addSticker,
    pick,
    move,
    stick
  };

}

let initialState = () => {
  return {
    photo: null,
    picked: null,
    stuckers: [],
    stickers: []
  };
};
