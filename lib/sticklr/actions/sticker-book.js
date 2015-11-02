import * as types  from "../constants/action-types";

export const choosePhoto = (photo) => ({ type: types.CHOOSE_PHOTO, photo });
export const reset = () => ({ type: types.RESET });

export const addSticker = (sticker) => ({ type: types.ADD_STICKER, sticker });

export const pick = (stucker) => ({ type: types.PICK_STICKER, stucker });
export const move = (coords) => ({ type: types.MOVE, coords });
export const stick = (coords) => ({ type: types.STICK, coords });
