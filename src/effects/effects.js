import Lagrange from './lagrange';
import * as color from './color';

/* eslint import/prefer-default-export: 0 */

const lagrangeRgbMap = require('./rgb_map');

const applyInstagramFilter = (filterType, pix) => {
  const newPix = pix.slice();
  const rgbMap = lagrangeRgbMap[filterType];
  const lagrangeR = new Lagrange(0, 0, 1, 1);
  const lagrangeG = new Lagrange(0, 0, 1, 1);
  const lagrangeB = new Lagrange(0, 0, 1, 1);
  lagrangeR.addMultiPoints(rgbMap.r);
  lagrangeG.addMultiPoints(rgbMap.g);
  lagrangeB.addMultiPoints(rgbMap.b);
  for (let i = 0, n = pix.length; i < n; i += 4) {
    newPix[i] = lagrangeR.valueOf(pix[i]);
    newPix[i + 1] = lagrangeB.valueOf(pix[i + 1]);
    newPix[i + 2] = lagrangeG.valueOf(pix[i + 2]);
  }
  return newPix;
};

export const enhance = (pixSrc) => {
  const pix = Object.assign([], pixSrc);
  for (let i = 0, n = pix.length; i < n; i += 4) {
    pix[i] *= 1.24;
    pix[i + 1] *= 1.33;
    pix[i + 2] *= 1.21;
  }
  return pix;
};

export const grayscale = (pixSrc) => {
  const pix = Object.assign([], pixSrc);
  for (let i = 0, n = pix.length; i < n; i += 4) {
    const { r, g, b } = { r: pix[i], g: pix[i + 1], b: pix[i + 1] };
    const scale = color.convertNTSC(r, g, b);
    pix[i] = scale;
    pix[i + 1] = scale;
    pix[i + 2] = scale;
  }
  return pix;
};

export const sepia = (pixSrc) => {
  const pix = Object.assign([], pixSrc);
  for (let i = 0, n = pix.length; i < n; i += 4) {
    pix[i] *= 1.07;
    pix[i + 1] *= 0.74;
    pix[i + 2] *= 0.43;
  }
  return pix;
};

export const luminance = (pixSrc) => {
  const pix = Object.assign([], pixSrc);
  for (let i = 0, n = pix.length; i < n; i += 4) {
    const { r, g, b } = { r: pix[i], g: pix[i + 1], b: pix[i + 1] };
    const luminanceScale = color.convertLuminanceLinearRGB(r, g, b);
    pix[i] = luminanceScale;
    pix[i + 1] = luminanceScale;
    pix[i + 2] = luminanceScale;
  }
  return pix;
};

export const negaposi = (pixSrc) => {
  const pix = Object.assign([], pixSrc);
  for (let i = 0, n = pix.length; i < n; i += 4) {
    pix[i] = 255 - pix[i];
    pix[i + 1] = 255 - pix[i + 1];
    pix[i + 2] = 255 - pix[i + 2];
  }
  return pix;
};

export const opacity = (imageData, options) => {
  const pix = imageData.data;
  const val = options.value ? options.value : 0.5;
  for (let i = 0, n = pix.length; i < n; i += 4) {
    pix[i + 3] = pix[i + 3] * val;
  }
  return pix;
};

export const brighten = (imageData, options) => {
  const pix = imageData.data;
  const val = options.value ? options.value : 50;
  for (let i = 0, n = pix.length; i < n; i += 4) {
    pix[i] += val;
    pix[i + 1] += val;
    pix[i + 2] += val;
  }
  return pix;
};

export const darken = (imageData, options) => {
  const pix = imageData.data;
  const val = options.value ? options.value : 50;
  for (let i = 0, n = pix.length; i < n; i += 4) {
    pix[i] -= val;
    pix[i + 1] -= val;
    pix[i + 2] -= val;
  }
  return pix;
};

export const threshold = (imageData) => {
  const pix = imageData.data;
  const len = pix.length;
  for (let i = 0; i < len; i += 4) {
    const { r, g, b } = { r: pix[i], g: pix[i + 1], b: pix[i + 1] };
    const threshold = color.convertNTSC(r, g, b);
    const bw = color.blackOrWhite(r, g, b, threshold);
    pix[i] = bw;
    pix[i + 1] = bw;
    pix[i + 2] = bw;
  }
  return pix;
};

export const hueRotate = (imageData, options) => {
  const pix = imageData.data;
  const deg = options.degree ? options.degree : 45;
  for (let i = 0, n = pix.length; i < n; i += 4) {
    const hsv = color.rgb2hsv(pix[i], pix[i + 1], pix[i + 2]);
    hsv[0] = hsv[0] * deg / 360;
    const rgb = color.hsv2rgb(hsv[0], hsv[1], hsv[2]);
    pix[i] = rgb[0];
    pix[i + 1] = rgb[1];
    pix[i + 2] = rgb[2];
  }
  return pix;
};

export const saturate = (imageData, options) => {
  const pix = imageData.data;
  const val = options.value ? options.value : 20;
  for (let i = 0, n = pix.length; i < n; i += 4) {
    const hsv = color.rgb2hsv(pix[i], pix[i + 1], pix[i + 2]);
    hsv[1] = hsv[1] * val / 100;
    const rgb = color.hsv2rgb(hsv[0], hsv[1], hsv[2]);
    pix[i] = rgb[0];
    pix[i + 1] = rgb[1];
    pix[i + 2] = rgb[2];
  }
  return pix;
};

export const brightnessContrast = (imageData, options) => {
  const pix = imageData.data;
  const brightness = options.brightness ? options.brightness : -0.08;
  const contrast = options.contrast ? options.contrast : 1.5;
  const contrastAdjust = -128 * contrast + 128;
  const brightnessAdjust = 255 * brightness;
  const adjust = contrastAdjust + brightnessAdjust;
  const lut = color.getUnit8Array(256);
  const len = lut.length;
  for (let i = 0; i < len; i++) {
    const c = i * contrast + adjust;
    if (c < 0) {
      lut[i] = 0;
    } else {
      lut[i] = (c > 255) ? 255 : c;
    }
  }
  return color.applyLUT(
        pix,
    {
      red: lut,
      green: lut,
      blue: lut,
      alpha: color.identityLUT(),
    },
    );
};

export const horizontalFlip = (imageData) => {
  const pix = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  const newPix = Object.assign([], pix);
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const off = (i * width + j) * 4;
      const dstOff = (i * width + (width - j - 1)) * 4;
      pix[dstOff] = newPix[off];
      pix[dstOff + 1] = newPix[off + 1];
      pix[dstOff + 2] = newPix[off + 2];
      pix[dstOff + 3] = newPix[off + 3];
    }
  }
  return pix;
};

export const verticalFlip = (imageData) => {
  const pix = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  const newPix = Object.assign([], pix);
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const off = (i * width + j) * 4;
      const dstOff = ((height - i - 1) * width + j) * 4;
      pix[dstOff] = newPix[off];
      pix[dstOff + 1] = newPix[off + 1];
      pix[dstOff + 2] = newPix[off + 2];
      pix[dstOff + 3] = newPix[off + 3];
    }
  }
  return pix;
};

export const doubleFlip = (imageData) => {
  const pix = imageData.data;
  const newPix = Object.assign([], pix);
  for (let i = 0, n = pix.length; i < n; i += 4) {
    pix[i] = newPix[n - i];
    pix[i + 1] = newPix[n - i + 1];
    pix[i + 2] = newPix[n - i + 2];
    pix[i + 3] = newPix[n - i + 3];
  }
  return pix;
};

export const horizontalMirror = (imageData) => {
  const pix = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const off = (i * width + j) * 4;
      const dstOff = (i * width + (width - j - 1)) * 4;
      pix[dstOff] = pix[off];
      pix[dstOff + 1] = pix[off + 1];
      pix[dstOff + 2] = pix[off + 2];
      pix[dstOff + 3] = pix[off + 3];
    }
  }
  return pix;
};

export const verticalMirror = (imageData) => {
  const pix = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const off = (i * width + j) * 4;
      const dstOff = ((height - i - 1) * width + j) * 4;
      pix[dstOff] = pix[off];
      pix[dstOff + 1] = pix[off + 1];
      pix[dstOff + 2] = pix[off + 2];
      pix[dstOff + 3] = pix[off + 3];
    }
  }
  return pix;
};

export const XYMirror = (imageData) => {
  const pix = imageData.data;
  for (let i = 0, n = pix.length; i < n; i += 4) {
    pix[i] = pix[n - i];
    pix[i + 1] = pix[n - i + 1];
    pix[i + 2] = pix[n - i + 2];
    pix[i + 3] = pix[n - i + 3];
  }
  return pix;
};

export const lark = imageData => applyInstagramFilter('lark', imageData.data);
export const reyes = imageData => applyInstagramFilter('reyes', imageData.data);
export const juno = imageData => applyInstagramFilter('juno', imageData.data);
export const slumber = imageData => applyInstagramFilter('slumber', imageData.data);
export const crema = imageData => applyInstagramFilter('crema', imageData.data);
export const ludwig = imageData => applyInstagramFilter('ludwig', imageData.data);
export const aden = imageData => applyInstagramFilter('aden', imageData.data);
export const perpetua = imageData => applyInstagramFilter('perpetua', imageData.data);
export const amaro = imageData => applyInstagramFilter('amaro', imageData.data);
export const mayfair = imageData => applyInstagramFilter('mayfair', imageData.data);
export const rise = imageData => applyInstagramFilter('rise', imageData.data);
export const hudson = imageData => applyInstagramFilter('hudson', imageData.data);
export const valencia = imageData => applyInstagramFilter('valencia', imageData.data);
export const xpro2 = imageData => applyInstagramFilter('xpro2', imageData.data);
export const sierra = imageData => applyInstagramFilter('sierra', imageData.data);
export const willow = imageData => applyInstagramFilter('willow', imageData.data);
export const lofi = imageData => applyInstagramFilter('lofi', imageData.data);
export const earlybird = imageData => applyInstagramFilter('earlybird', imageData.data);
export const brannan = imageData => applyInstagramFilter('brannan', imageData.data);
export const inkwell = (imageData) => {
  const pix = imageData.data;
  for (let i = 0, n = pix.length; i < n; i += 4) {
    const val = pix[i] * 0.33 + pix[i + 1] * 0.58 + pix[i + 2] * 0.22;
    pix[i] = val;
    pix[i + 1] = val;
    pix[i + 2] = val;
  }
  return pix;
};

export const hefe = imageData => applyInstagramFilter('hefe', imageData.data);
export const nashville = imageData => applyInstagramFilter('nashville', imageData.data);
export const sutro = imageData => applyInstagramFilter('sutro', imageData.data);
export const toaster = imageData => applyInstagramFilter('toaster', imageData.data);
export const walden = imageData => applyInstagramFilter('walden', imageData.data);
export const nineteenSeventySeven = imageData => applyInstagramFilter('nineteenSeventySeven', imageData.data);
export const kelvin = imageData => applyInstagramFilter('kelvin', imageData.data);

