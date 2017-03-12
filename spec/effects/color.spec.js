import * as Colors from '../../src/effects/color';

const assert = require('assert');

const fixFloat = (n, d) => parseFloat(n.toFixed(d));

describe('Colors#convertNTSC()', () => {
  it('convert [0, 0, 0] to 0', () => {
    assert.equal(Colors.convertNTSC(0, 0, 0), 0);
  });
  it('convert RGB(255, 255, 255) to 249.9', () => {
    const scale = Colors.convertNTSC(255, 255, 255);
    assert.equal(fixFloat(scale, 1), 249.9);
  });
  it('convert RGB(100, 100, 100) to 98', () => {
    const scale = Colors.convertNTSC(100, 100, 100);
    assert.equal(fixFloat(scale, 1), 98.0);
  });
  it('throws error if input color range is invalid', () => {
    try {
      Colors.convertNTSC(300, -100, 1000);
    } catch (error) {
      assert.equal(error.message, 'Invalid Color Code');
    }
  });
});

describe('Colors#binarize()', () => {
  it('return 255 if RGB(0, 0, 0) with threshold 0 is given', () => {
    const scale = Colors.binarize(0, 0, 0, 0);
    assert.equal(scale, 255);
  });
  it('return 0 if RGB(100, 100, 100) with threshold 50 is given', () => {
    const scale = Colors.binarize(255, 255, 255, 0);
    assert.equal(scale, 0);
  });
  it('return 0 if RGB(100, 100, 100) with threshold 98 is given', () => {
    const scale = Colors.binarize(100, 100, 100, 98);
    assert.equal(scale, 0);
  });
  it('return 255 if RGB(100, 100, 100) with threshold 99 is given', () => {
    const scale = Colors.binarize(100, 100, 100, 99);
    assert.equal(scale, 255);
  });
  it('throws error if input color range is invalid', () => {
    try {
      Colors.binarize(300, -100, 1000, 50);
    } catch (error) {
      assert.equal(error.message, 'Invalid Color Code');
    }
  });
});

describe('Colors#convertLuminanceLinearRGB()', () => {
  it('converts RGB(0, 0, 0) to 0', () => {
    const result = Colors.convertLuminanceLinearRGB(0, 0, 0);
    assert.equal(result, 0);
  });
  it('converts RGB(255, 255, 255) to 255', () => {
    const result = Colors.convertLuminanceLinearRGB(255, 255, 255);
    assert.equal(fixFloat(result, 1), 255);
  });
  it('converts RGB(120, 55, 250) to 82.898', () => {
    const result = Colors.convertLuminanceLinearRGB(120, 55, 250);
    assert.equal(result, 82.898);
  });
  it('throws error if input color range is invalid', () => {
    try {
      Colors.convertLuminanceLinearRGB(300, 0, 0);
    } catch (error) {
      assert.equal(error.message, 'Invalid Color Code');
    }
  });
});

describe('Colors#indentityLUT()', () => {
  it('returns LUT with length 256', () => {
    const lut = Colors.identityLUT();
    assert.equal(lut.length, 256);
  });
  it('returns LUT and its 0th value is 0', () => {
    const lut = Colors.identityLUT();
    assert.equal(lut[0], 0);
  });
  it('returns LUT and its 120th value is 120', () => {
    const lut = Colors.identityLUT();
    assert.equal(lut[120], 120);
  });
  it('returns LUT and its 255th value is 255', () => {
    const lut = Colors.identityLUT();
    assert.equal(lut[255], 255);
  });
});

describe('Colors#applyLUT()', () => {
  // TODO:
});

describe('Colors#rgb2hex()', () => {
  it('converts RGB(255, 255, 255) to #FFFFFF', () => {
    const hex = Colors.rgb2hex(255, 255, 255);
    assert.equal(hex, 'FFFFFF');
  });
  it('converts RGB(0, 0, 0) to #000', () => {
    const hex = Colors.rgb2hex(0, 0, 0);
    assert.equal(hex, '000');
  });
  it('converts RGB(120, 55, 250) to #7837FA', () => {
    const hex = Colors.rgb2hex(120, 55, 250);
    assert.equal(hex, '7837FA');
  });
  it('throws error if input color range is invalid', () => {
    try {
      Colors.rgb2hex(300, 0, 0);
    } catch (error) {
      assert.equal(error.message, 'Invalid Color Code');
    }
  });
});

describe('Colors#hex2rgb()', () => {
  it('converts #FFFFFF to RGB(255, 255, 255)', () => {
    const rgb = Colors.hex2rgb('FFFFFF');
    assert.deepEqual(rgb, [255, 255, 255]);
  });
  it('converts #000000 to RGB(0, 0, 0)', () => {
    const rgb = Colors.hex2rgb('000000');
    assert.deepEqual(rgb, [0, 0, 0]);
  });
  it('converts #7837FA to RGB(120, 55, 250)', () => {
    const rgb = Colors.hex2rgb('7837FA');
    assert.deepEqual(rgb, [120, 55, 250]);
  });
  it('throws error if input pixel range is invalid', () => {
    try {
      Colors.hex2rgb('GG00FF');
    } catch (error) {
      assert.equal(error.message, 'Invalid hex code');
    }
  });
});

describe('Colors#rgb2cmyk()', () => {
  it('converts RGB(0, 0, 0) to CMYK(0, 0, 0, 1)', () => {
    const cmyk = Colors.rgb2cmyk(0, 0, 0);
    assert.deepEqual(cmyk, [0, 0, 0, 1]);
  });
  it('converts RGB(255, 255, 255) to CMYK(0, 0, 0, 0)', () => {
    const cmyk = Colors.rgb2cmyk(255, 255, 255);
    assert.deepEqual(cmyk, [0, 0, 0, 0]);
  });
  it('converts RGB(255, 0, 0) to CMYK(0, 1, 1, 0)', () => {
    const cmyk = Colors.rgb2cmyk(255, 0, 0);
    assert.deepEqual(cmyk, [0, 1, 1, 0]);
  });
  it('converts RGB(120, 55, 250) to CMYK(0.52, 0.78, 0, 0.0196)', () => {
    const cmyk = Colors.rgb2cmyk(120, 55, 250);
    assert.deepEqual(cmyk, [0.52, 0.78, 0, 0.0196]);
  });
  it('throws error if input color code is invalid', () => {
    try {
      Colors.rgb2cmyk(300, -100, 100);
    } catch (error) {
      assert.equal(error.message, 'Invalid Color Code');
    }
  });
});

describe('Colors#cmyk2rgb()', () => {
  it('converts CMYK(0, 0, 0, 1) to RGB(0, 0, 0)', () => {
    const rgb = Colors.cmyk2rgb(0, 0, 0, 1);
    assert.deepEqual(rgb, [0, 0, 0]);
  });
  it('converts CMYK(0, 0, 0, 0) to RGB(255, 255, 255)', () => {
    const rgb = Colors.cmyk2rgb(0, 0, 0, 0);
    assert.deepEqual(rgb, [255, 255, 255]);
  });
  it('converts CMYK(0, 1, 1, 0) to RGB(255, 0, 0)', () => {
    const rgb = Colors.cmyk2rgb(0, 1, 1, 0);
    assert.deepEqual(rgb, [255, 0, 0]);
  });
  it('converts CMYK(0.52, 0.78, 0, 0.0196) to RGB(120, 55, 250)', () => {
    const rgb = Colors.cmyk2rgb(0.52, 0.78, 0, 0.0196);
    assert.deepEqual(rgb, [120, 55, 250]);
  });
  it('throws error if input color code is invalid', () => {
    try {
      Colors.cmyk2rgb(300, -100, 100, 0);
    } catch (error) {
      assert.equal(error.message, 'Invalid CMYK Code');
    }
  });
});

describe('Colors#rgb2hsl()', () => {
  it('converts RGB(0, 0, 0) to HSL(0, 0, 0)', () => {
    const hsl = Colors.rgb2hsl(0, 0, 0);
    assert.deepEqual(hsl, [0, 0, 0]);
  });
  it('converts RGB(255, 255, 255) to HSL(0, 0, 1)', () => {
    const hsl = Colors.rgb2hsl(255, 255, 255);
    assert.deepEqual(hsl, [0, 0, 1]);
  });
  it('converts RGB(255, 0, 0) to HSL(0, 1, 0.5)', () => {
    const hsl = Colors.rgb2hsl(255, 0, 0);
    assert.deepEqual(hsl, [0, 1, 0.5]);
  });
  it('converts RGB(120, 55, 250) to HSL(0.7222, 0.9512, 0.5980)', () => {
    const hsl = Colors.rgb2hsl(120, 55, 250);
    assert.deepEqual(hsl.map(x => fixFloat(x, 4)), [0.7222, 0.9512, 0.5980]);
  });
  it('throws error if input color code is invalid', () => {
    try {
      Colors.rgb2hsl(300, -100, 100);
    } catch (error) {
      assert.equal(error.message, 'Invalid Color Code');
    }
  });
});

describe('Colors#hsl2rgb()', () => {
  it('converts HSL(0, 0, 0) to RGB(0, 0, 0)', () => {
    const rgb = Colors.hsl2rgb(0, 0, 0);
    assert.deepEqual(rgb, [0, 0, 0]);
  });
  it('converts HSL(0, 0, 1) to RGB(255, 255, 255)', () => {
    const rgb = Colors.hsl2rgb(0, 0, 1);
    assert.deepEqual(rgb, [255, 255, 255]);
  });
  it('converts HSL(0, 1, 0.5) to RGB(255, 0, 0)', () => {
    const rgb = Colors.hsl2rgb(0, 1, 0.5);
    assert.deepEqual(rgb, [255, 0, 0]);
  });
  it('converts HSL(0.7222, 0.9512, 0.5980) to RGB(120, 55, 250)', () => {
    const rgb = Colors.hsl2rgb(0.7222, 0.9512, 0.5980);
    assert.deepEqual(rgb.map(Math.round), [120, 55, 250]);
  });
  it('throws error if input color code is invalid', () => {
    try {
      Colors.hsl2rgb(300, -100, 100);
    } catch (error) {
      assert.equal(error.message, 'Invalid HSL value');
    }
  });
});

describe('Colors#rgb2hsv()', () => {
  it('converts RGB(0, 0, 0) to HSV(0, 0, 0)', () => {
    const hsv = Colors.rgb2hsv(0, 0, 0);
    assert.deepEqual(hsv, [0, 0, 0]);
  });
  it('converts RGB(255, 255, 255) to HSV(0, 0, 1)', () => {
    const hsv = Colors.rgb2hsv(255, 255, 255);
    assert.deepEqual(hsv, [0, 0, 1]);
  });
  it('converts RGB(255, 0, 0) to HSV(0, 1, 1)', () => {
    const hsv = Colors.rgb2hsv(255, 0, 0);
    assert.deepEqual(hsv, [0, 1, 1]);
  });
  it('converts RGB(120, 55, 250) to HSV(0.7222, 0.78, 0.98)', () => {
    const hsv = Colors.rgb2hsv(120, 55, 250);
    assert.deepEqual(hsv.map(x => fixFloat(x, 4)), [0.7222, 0.7800, 0.9804]);
  });
  it('throws error if input color code is invalid', () => {
    try {
      Colors.rgb2hsv(300, -100, 100);
    } catch (error) {
      assert.equal(error.message, 'Invalid Color Code');
    }
  });
});

describe('Colors#hsv2rgb()', () => {
  it('converts HSV(0, 0, 0) to RGB(0, 0, 0)', () => {
    const rgb = Colors.hsv2rgb(0, 0, 0);
    assert.deepEqual(rgb, [0, 0, 0]);
  });
  it('converts HSV(0, 0, 1) to RGB(255, 255, 255)', () => {
    const rgb = Colors.hsv2rgb(0, 0, 1);
    assert.deepEqual(rgb, [255, 255, 255]);
  });
  it('converts HSV(0, 1, 1) to RGB(255, 0, 0)', () => {
    const rgb = Colors.hsv2rgb(0, 1, 1);
    assert.deepEqual(rgb, [255, 0, 0]);
  });
  it('converts HSV(0.7222, 0.7800, 0.9804) to RGB(120, 55, 250)', () => {
    const rgb = Colors.hsv2rgb(0.7222, 0.7800, 0.9804);
    assert.deepEqual(rgb.map(Math.round), [120, 55, 250]);
  });
  it('throws error if input color code is invalid', () => {
    try {
      Colors.hsv2rgb(300, -100, 100);
    } catch (error) {
      assert.equal(error.message, 'Invalid HSV value');
    }
  });
});
