export const isPointVisible = ({
  lat,
  lon,
  mapWidth,
  mapHeight,
  imageDataAlphaArray,
}) => {
  const x = Math.floor(((lon + 180) / 360) * mapWidth);
  const y = Math.floor(((lat + 90) / 180) * mapHeight);
  const pos = mapWidth * y + x;
  return imageDataAlphaArray[pos] >= 255;
};
