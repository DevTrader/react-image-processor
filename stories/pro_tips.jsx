import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@kadira/storybook';
import ImageProcessor from '../src/image_processor';
import src from './sample.jpg';

storiesOf('Pro Tips', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center' }}>
      {story()}
    </div>
  ))
  .add('multiply effects when onClick', () => {
    class Wrapper extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          effect: 'enhance',
        };
      }

      onClickHandler() {
        this.setState({
          effect: this.state.effect === 'enhance' ? 'grayscale' : 'enhance',
        });
      }

      render() {
        return (
          <div onClick={() => this.onClickHandler()} >
            <ImageProcessor
              alt="react story book sample image"
              effect={this.state.effect}
              src={src}
            />
          </div>
        );
      }
    }
    return <Wrapper />;
  })
  .add('change effect onMouserHover', () => {
    class Wrapper extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          effect: 'none',
        };
      }

      render() {
        return (
          <div
            onMouseEnter={() => this.setState({ effect: 'grayscale' })}
            onMouseLeave={() => this.setState({ effect: 'none' })}
          >
            <ImageProcessor
              alt="react story book sample image"
              effect={this.state.effect}
              src={src}
            />
          </div>
        );
      }
    }
    return <Wrapper />;
  })
  ;
