import React from 'react';
import effectsShape from './effects_shape';
import effectsMap from './effects_map';

export default class ImageProcessor extends React.Component {
  static get propTypes() {
    return {
      alt: React.PropTypes.string.isRequired,
      src: React.PropTypes.string.isRequired,
      effect: effectsShape.isRequired,
    };
  }

  componentDidMount() {
    const isRendered = this.img.width > 0 && this.img.height > 0;
    if (isRendered) {
      this.applyEffect();
    }
  }

  applyEffect() {
    const canvas = document.createElement('canvas');
    canvas.width = this.img.width;
    canvas.height = this.img.height;

    const context = canvas.getContext('2d');
    context.drawImage(this.img, 0, 0);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    const func = effectsMap[this.props.effect];
    const convertedPixels = func(imageData);

    const clampedArray = Uint8ClampedArray.from(convertedPixels);
    const newImageData = new ImageData(clampedArray, this.img.width, this.img.height);

    context.putImageData(newImageData, 0, 0);
    const src = canvas.toDataURL();
    this.img.src = src;
  }

  render() {
    return (
      <img
        ref={img => this.img = img}
        alt={this.props.alt}
        src={this.props.src}
      />
    );
  }
}
