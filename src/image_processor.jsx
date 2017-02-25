import React from 'react';

export default class ImageProcessor extends React.Component {
  static get propTypes() {
    return {
      src: React.PropTypes.string.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <img
        alt='image processor'
        src={this.props.src}
      />
    );
  }
}
