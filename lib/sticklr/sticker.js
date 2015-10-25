
export default function sticker (name, dataUri) {
  return Object.freeze({
    name,
    dataUri
  });
};
