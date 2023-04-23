export const getElWidth = (elRef) => {
  let finalWidth = 0;
  Array.from(elRef.children).forEach(child => {
    finalWidth += child.clientWidth;
  });
  return finalWidth;
};

export const getElHeight = (elRef) => {
  let finalHeight = 0;
  Array.from(elRef.children).forEach(child => {
    finalHeight += child.clientHeight;
  });
  return finalHeight;
};
