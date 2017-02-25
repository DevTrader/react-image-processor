/* eslint import/prefer-default-export: 0 */

const getCanvas = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

export const getPixels = (img) => {
  const canvas = getCanvas(img.width, img.height);
  const context = canvas.getContext('2d');
  context.drawImage(img, 0, 0);
  return context.getImageData(0, 0, canvas.width, canvas.height);
};

export const renderCanvas = (img, newPixels) => {
  const canvas = getCanvas(img.width, img.height);
  const context = canvas.getContext('2d');
  context.putImageData(newPixels, 0, 0);
  return canvas.toDataURL();
};
