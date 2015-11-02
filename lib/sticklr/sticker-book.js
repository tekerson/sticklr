import { createStore } from "redux";
import rootReducer from "./reducers/sticker-book";

let initialState = {
  photo: null,
  picked: null,
  stickers: [],
  stuckers: [],
};

export default function configureStore (state = initialState) {
  return createStore(rootReducer, state);
}
