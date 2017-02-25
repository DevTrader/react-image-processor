import React from 'react';
import * as effects from './effects/effects';
import effectsShape from './effects_shape';

const effectMap = {
  lark: effects.lark,
  reyes: effects.reyes,
  juno: effects.juno,
  slumber: effects.slumber,
  crema: effects.crema,
  ludwig: effects.ludwig,
  aden: effects.aden,
  perpetua: effects.perpetua,
  amaro: effects.amaro,
  mayfair: effects.mayfair,
  rise: effects.rise,
  hudson: effects.hudson,
  valencia: effects.valencia,
  xpro2: effects.xpro2,
  sierra: effects.sierra,
  willow: effects.willow,
  lofi: effects.lofi,
  earlybird: effects.earlybird,
  brannan: effects.brannan,
  inkwell: effects.inkwell,
  hefe: effects.hefe,
  nashville: effects.nashville,
  sutro: effects.sutro,
  toaster: effects.toaster,
  walden: effects.walden,
  nineteenseventyseven: effects.nineteenSeventySeven,
  kelvin: effects.kelvin,
  enhance: effects.enhance,
  grayscale: effects.grayscale,
  sepia: effects.sepia,
  luminance: effects.luminance,
  opacity: effects.opacity,
  brighten: effects.brighten,
  darken: effects.darken,
  threshold: effects.threshold,
  negaposi: effects.negaposi,
  brightnesscontrast: effects.brightnessContrast,
  huerotate: effects.hueRotate,
  saturate: effects.saturate,
  horizontalflip: effects.horizontalFlip,
  verticalflip: effects.verticalFlip,
  doubleflip: effects.doubleFlip,
  horizontalmirror: effects.horizontalMirror,
  verticalmirror: effects.verticalMirror,
  xymirror: effects.XYMirror,
};

export default class ImageProcessor extends React.Component {
  static get propTypes() {
    return {
      src: React.PropTypes.string.isRequired,
      effect: effectsShape.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      src: props.src,
    };
  }

  componentDidMount() {
    const imageData = this.getPixels(this.img);

    const func = effectMap[this.props.effect.toLowerCase()];
    const convertedPixels = func(imageData.data); // e.g. grayscape();
    const newImageData = new ImageData(Uint8ClampedArray.from(convertedPixels), imageData.width, imageData.height);

    const src = this.renderCanvas(this.img, newImageData);
    this.setState({ src });
  }

  buildCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  };

  getPixels(img) {
    const canvas = this.buildCanvas(img.width, img.height);
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    return context.getImageData(0, 0, canvas.width, canvas.height);
  };

  renderCanvas(img, newImageData) {
    const canvas = this.buildCanvas(img.width, img.height);
    const context = canvas.getContext('2d');
    context.putImageData(newImageData, 0, 0);
    return canvas.toDataURL();
  };

  render() {
    return (
      <img
        ref={(img) => this.img = img}
        alt='image processor'
        src={this.state.src}
      />
    );
  }
}
