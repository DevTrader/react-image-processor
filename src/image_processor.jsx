import React from 'react';
import effectsShape from './effects_shape';
import effectsMap from './effects_map';

export default class ImageProcessor extends React.Component {
  static get propTypes() {
    return {
      alt: React.PropTypes.string.isRequired,
      effect: effectsShape.isRequired,
      options: React.PropTypes.object,
      src: React.PropTypes.string.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      src: props.src,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.effect !== nextProps.effect) {
      this.applyEffect(nextProps.effect);
    }
  }

  componentDidMount() {
    const isRendered = this.img.width > 0 && this.img.height > 0;
    if (isRendered) {
      this.applyEffect();
    }
  }

  componentWillUnmount() {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
  }

  applyEffect(effect = this.props.effect) {
    if (effect === 'none') {
      this.setState({ src: this.props.src });
    } else {
      this.timeoutID = setTimeout(() => {
        this.getEffectAppliedImageData(effect)
          .then(src => this.setState({ src }))
          .catch(err => console.error(err));
      }, 0);
    }
  }

  getSingletonCanvas(width, height) {
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

  getEffectAppliedImageData(effect) {
    return new Promise((resolve) => {
      const canvas = this.getSingletonCanvas(this.img.width, this.img.height);
      const context = canvas.getContext('2d');
      context.drawImage(this.img, 0, 0);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

      const func = effectsMap[effect];
      func(imageData, this.props.options);

      context.putImageData(imageData, 0, 0);
      resolve(canvas.toDataURL());
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
