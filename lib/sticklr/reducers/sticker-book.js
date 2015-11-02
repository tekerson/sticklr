import * as actions from "../constants/action-types";

let initialState = {
  photo: null,
  picked: null,
  stickers: [],
  stuckers: [],
};

let choosePhoto = (state, photo) => Object.assign({}, state, { photo });

let reset = (state) => Object.assign({}, state, {
  photo: null,
  stuckers: [],
});

let addSticker = (state, sticker) => Object.assign({}, state, {
  stickers: [...state.stickers, sticker],
});

let pick = (state, stucker) =>
  (state.photo == null)
  ? state
  : Object.assign({}, state, {
    picked: stucker,
  });

let move = (state, coords) =>
  (state.picked == null)
  ? state
  : Object.assign({}, state, {
    picked: state.picked.move(coords),
  });

let stick = (state, coords) =>
  (state.picked == null)
  ? state
  : Object.assign({}, state, {
    stuckers: [...state.stuckers, state.picked.move(coords)],
    picked: null,
  });

export default function reduce (state = initialState, action) {
  switch (action.type) {
  case actions.CHOOSE_PHOTO: return choosePhoto(state, action.photo);
  case actions.RESET: return reset(state);
  case actions.ADD_STICKER: return addSticker(state, action.sticker);
  case actions.PICK_STICKER: return pick(state, action.stucker);
  case actions.MOVE: return move(state, action.coords);
  case actions.STICK: return stick(state, action.coords);
  default: return state;
  }
};
