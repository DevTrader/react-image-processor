import React from 'react';
import effectsShape from './effects_shape';
import {
  getPixels,
  renderCanvas,
} from './canvas';
import {
  grayscale,
} from './effects/effects';

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
    const canvas = document.createElement('canvas');
    const imageData = getPixels(this.img);
    grayscale(imageData);
    const src = renderCanvas(this.img, imageData);
    this.setState({ src });
  }

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
