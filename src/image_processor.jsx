import React from 'react';
import effectsShape from './effects_shape';
import effectsMap from './effects_map';

export default class ImageProcessor extends React.Component {
  static get propTypes() {
    return {
      alt: React.PropTypes.string.isRequired,
      effect: effectsShape.isRequired,
      options: React.PropTypes.options,
      src: React.PropTypes.string.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      src: props.src,
    };
  }

  componentDidMount() {
    const isRendered = this.img.width > 0 && this.img.height > 0;
    if (isRendered) {
      this.timeoutID = setTimeout(() => {
        this.applyEffect();
      }, 0);
    }
  }

  getCanvas(width, height) {
    let canvas;
    if (this.canvas) {
      canvas = this.canvas;
    } else {
      canvas = document.createElement('canvas'); // eslint-disable-line no-undef
    }
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  applyEffect() {
    const canvas = this.getCanvas(this.img.width, this.img.height);
    const context = canvas.getContext('2d');
    context.drawImage(this.img, 0, 0);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    const func = effectsMap[this.props.effect];
    func(imageData, this.props.options);

    context.putImageData(imageData, 0, 0);
    this.setState({
      src: canvas.toDataURL(),
    });
  }

  render() {
    return (
      <img
        ref={img => this.img = img} // eslint-disable-line no-return-assign
        alt={this.props.alt}
        src={this.state.src}
      />
    );
  }
}
