let stuckerProto = {

  sticker: null,
  coords: null,

  move: function move (coords) {
    return stucker(this.sticker, coords);
  },

};

export default function stucker (sticker, coords) {
  let obj = Object.create(stuckerProto);
  obj.sticker = sticker;
  obj.coords = coords;
  return Object.freeze(obj);
};
