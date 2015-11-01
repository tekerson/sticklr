export default (state) => {

  state = Object.assign({}, {
    stickers: [],
    stuckers: [],
  }, state);

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
    state.stickers = [...state.stickers, sticker];
    return true;
  };

  let pick = (stucker) => {
    if (state.photo == null) {
      return false;
    }
    state.picked = stucker;
    return true;
  };
  let move = (coords) => {
    if (state.picked == null) {
      return false;
    }
    state.picked = state.picked.move(coords);
    return true;
  };
  let stick = (coords) => {
    if (state.picked == null) {
      return false;
    }
    state.stuckers = [...state.stuckers, state.picked.move(coords)];
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
