
export const applyScroll = (props) => {
  const { scrollObj, x, y } = props;
  applyScrollY(y, scrollObj);
  applyScrollX(x, scrollObj);
};

const applyScrollX = (amountPx, scrollObj) => {
  const newOffsetX = scrollObj.targetX + amountPx / 200;

  scrollObj.targetX = newOffsetX;
};

const applyScrollY = (amountPx, scrollObj) => {
  const newOffsetY = scrollObj.targetY + amountPx / 200;

  if (Math.abs(newOffsetY) >= Math.PI / 2) {
    return;
  }

  scrollObj.targetY = newOffsetY;
};
