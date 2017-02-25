import React from 'react';
import effectsShape from './effects_shape';

export default class ImageProcessor extends React.Component {
  static get propTypes() {
    return {
      src: React.PropTypes.string.isRequired,
      effects: effectsShape.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      src: props.src,
    };
  }

  componentDidMount() {
    // TODO: apply effect to state src
  }

  render() {
    return (
      <img
        alt='image processor'
        src={this.state.src}
      />
    );
  }
}
