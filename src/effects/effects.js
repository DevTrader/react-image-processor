import Lagrange from './lagrange';
import * as color from './color';

/* eslint import/prefer-default-export: 0, no-param-reassign: 0 */

import lagrangeRgbMap from './rgb_map';

const applyInstagramFilter = (filterType, data) => {
  const pix = Object.assign([], data);
  const rgbMap = lagrangeRgbMap[filterType];
  const lagrangeR = new Lagrange(0, 0, 1, 1);
  const lagrangeG = new Lagrange(0, 0, 1, 1);
  const lagrangeB = new Lagrange(0, 0, 1, 1);
  lagrangeR.addMultiPoints(rgbMap.r);
  lagrangeG.addMultiPoints(rgbMap.g);
  lagrangeB.addMultiPoints(rgbMap.b);
  for (let i = 0, n = pix.length; i < n; i += 4) {
    data[i] = lagrangeR.valueOf(pix[i]);
    data[i + 1] = lagrangeB.valueOf(pix[i + 1]);
    data[i + 2] = lagrangeG.valueOf(pix[i + 2]);
  }
};

export const enhance = ({ data }) => {
  for (let i = 0, n = data.length; i < n; i += 4) {
    data[i] *= 1.24;
    data[i + 1] *= 1.33;
    data[i + 2] *= 1.21;
  }
};

export const grayscale = ({ data }) => {
  for (let i = 0, n = data.length; i < n; i += 4) {
    const { r, g, b } = { r: data[i], g: data[i + 1], b: data[i + 1] };
    const scale = color.convertNTSC(r, g, b);
    data[i] = scale;
    data[i + 1] = scale;
    data[i + 2] = scale;
  }
};

export const sepia = ({ data }) => {
  for (let i = 0, n = data.length; i < n; i += 4) {
    data[i] *= 1.07;
    data[i + 1] *= 0.74;
    data[i + 2] *= 0.43;
  }
};

export const luminance = ({ data }) => {
  for (let i = 0, n = data.length; i < n; i += 4) {
    const { r, g, b } = { r: data[i], g: data[i + 1], b: data[i + 1] };
    const luminanceScale = color.convertLuminanceLinearRGB(r, g, b);
    data[i] = luminanceScale;
    data[i + 1] = luminanceScale;
    data[i + 2] = luminanceScale;
  }
};

export const negaposi = ({ data }) => {
  for (let i = 0, n = data.length; i < n; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }
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

export const horizontalFlip = ({ data, width, height }) => {
  const newPix = Object.assign([], data);
  for (let i = 0; i < height; i += 1) {
    const w = i * width;
    for (let j = 0; j < width; j += 1) {
      const off = (w + j) * 4;
      const dstOff = (w + (width - j - 1)) * 4;
      data[dstOff] = newPix[off];
      data[dstOff + 1] = newPix[off + 1];
      data[dstOff + 2] = newPix[off + 2];
      data[dstOff + 3] = newPix[off + 3];
    }
  }
};

export const verticalFlip = ({ data, width, height }) => {
  const newPix = Object.assign([], data);
  for (let i = 0; i < height; i += 1) {
    for (let j = 0; j < width; j += 1) {
      const off = ((i * width) + j) * 4;
      const dstOff = (((height - i - 1) * width) + j) * 4;
      data[dstOff] = newPix[off];
      data[dstOff + 1] = newPix[off + 1];
      data[dstOff + 2] = newPix[off + 2];
      data[dstOff + 3] = newPix[off + 3];
    }
  }
};

export const doubleFlip = ({ data }) => {
  const newPix = Object.assign([], data);
  for (let i = 0, n = data.length; i < n; i += 4) {
    const k = n - 1;
    data[i] = newPix[k];
    data[i + 1] = newPix[k + 1];
    data[i + 2] = newPix[k + 2];
    data[i + 3] = newPix[k + 3];
  }
};

export const horizontalMirror = ({ data, width, height }) => {
  for (let i = 0; i < height; i += 1) {
    const k = i * width;
    for (let j = 0; j < width; j += 1) {
      const off = (k + j) * 4;
      const dstOff = (k + (width - j - 1)) * 4;
      data[dstOff] = data[off];
      data[dstOff + 1] = data[off + 1];
      data[dstOff + 2] = data[off + 2];
      data[dstOff + 3] = data[off + 3];
    }
  }
};

export const verticalMirror = ({ data, width, height }) => {
  for (let i = 0; i < height; i += 1) {
    for (let j = 0; j < width; j += 1) {
      const off = ((i * width) + j) * 4;
      const dstOff = (((height - i - 1) * width) + j) * 4;
      data[dstOff] = data[off];
      data[dstOff + 1] = data[off + 1];
      data[dstOff + 2] = data[off + 2];
      data[dstOff + 3] = data[off + 3];
    }
  }
};

export const XYMirror = ({ data }) => {
  for (let i = 0, n = data.length; i < n; i += 4) {
    const k = n - i;
    data[i] = data[k];
    data[i + 1] = data[k + 1];
    data[i + 2] = data[k + 2];
    data[i + 3] = data[k + 3];
  }
};

export const lark = ({ data }) => applyInstagramFilter('lark', data);
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

