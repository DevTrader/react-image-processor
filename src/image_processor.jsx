import React from 'react';
import effectsShape from './effects_shape';
import effectsMap from './effects_map';

export default class ImageProcessor extends React.Component {
  static get propTypes() {
    return {
      src: React.PropTypes.string.isRequired,
      effect: effectsShape.isRequired,
    };
  }

  componentDidMount() {
    const isRendered = this.canvas.width > 0 && this.canvas.height > 0;
    this.renderInitialImage();
    if (isRendered) {
      this.applyEffect();
    } else {
      this.renderInitialImage();
    }
  }

  renderInitialImage() {
    const context = this.canvas.getContext('2d');
    const image = new Image();
    image.src = this.props.src;
    context.drawImage(image, 0, 0);

    image.onload = () => {
      context.drawImage(image, image.width, image.height);
    };
  }

  applyEffect() {
    const context = this.canvas.getContext('2d');
    context.drawImage(this.canvas, 0, 0);
    const imageData = context.getImageData(0, 0, this.canvas.width, this.canvas.height);

    const func = effectsMap[this.props.effect];
    func(imageData);

    context.putImageData(imageData, 0, 0);
    this.canvas.src = this.canvas.toDataURL();
  }

  render() {
    return (
      <canvas ref={canvas => this.canvas = canvas} />
    );
  }
}
