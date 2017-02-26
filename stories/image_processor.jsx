import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@kadira/storybook';
import ImageProcessor from '../src/image_processor';
import src from './sample.jpg';

storiesOf('Original', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center' }}>
      {story()}
    </div>
  ))
  .add('original', () => (
    <img
      alt="react story book sample"
      src={src}
    />
  ));

storiesOf('Basic Effects', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center' }}>
      {story()}
    </div>
  ))
  .add('enhance', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="enhance"
      src={src}
    />
  ))
  .add('grayscale', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="grayscale"
      src={src}
    />
  ))
  .add('sepia', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="sepia"
      src={src}
    />
  ))
  .add('luminance', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="luminance"
      src={src}
    />
  ))
  .add('negaposi', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="negaposi"
      src={src}
    />
  ))
  .add('opacity', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="opacity"
      src={src}
    />
  ))
  .add('opacity (with options)', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="opacity"
      src={src}
      options={{ value: 0.1 }}
    />
  ))
  .add('brighten', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="brighten"
      src={src}
    />
  ))
  .add('brighten (with options)', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="brighten"
      src={src}
      options={{ value: 120 }}
    />
  ))
  .add('darken', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="darken"
      src={src}
    />
  ))
  .add('darken (with options)', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="darken"
      src={src}
      options={{ value: 120 }}
    />
  ))
  .add('threshold', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="threshold"
      src={src}
    />
  ))
  .add('huerotate', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="huerotate"
      src={src}
    />
  ))
  .add('huerotate (with options)', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="huerotate"
      src={src}
      options={{ degree: 90 }}
    />
  ))
  .add('saturate', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="saturate"
      src={src}
    />
  ))
  .add('saturate (with options)', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="saturate"
      src={src}
      options={{ value: 5 }}
    />
  ))
  .add('brightnesscontrast', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="brightnesscontrast"
      src={src}
    />
  ))
  .add('brightnesscontrast (with options)', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="brightnesscontrast"
      src={src}
      options={{
        brightness: 1.15,
        contrast: 2.0,
      }}
    />
  ))
  .add('horizontalflip', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="horizontalflip"
      src={src}
    />
  ))
  .add('verticalflip', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="verticalflip"
      src={src}
    />
  ))
  .add('doubleflip', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="doubleflip"
      src={src}
    />
  ))
  .add('horizontalmirror', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="horizontalmirror"
      src={src}
    />
  ))
  .add('verticalmirror', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="verticalmirror"
      src={src}
    />
  ))
  .add('xymirror', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="xymirror"
      src={src}
    />
  ));

storiesOf('Instagram Effects', module)
  .add('lark', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="lark"
      src={src}
    />
  ))
  .add('reyes', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="reyes"
      src={src}
    />
  ))
  .add('juno', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="juno"
      src={src}
    />
  ))
  .add('slumber', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="slumber"
      src={src}
    />
  ))
  .add('crema', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="crema"
      src={src}
    />
  ))
  .add('ludwig', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="ludwig"
      src={src}
    />
  ))
  .add('aden', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="aden"
      src={src}
    />
  ))
  .add('perpetua', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="perpetua"
      src={src}
    />
  ))
  .add('amaro', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="amaro"
      src={src}
    />
  ))
  .add('mayfair', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="mayfair"
      src={src}
    />
  ))
  .add('rise', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="rise"
      src={src}
    />
  ))
  .add('hudson', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="hudson"
      src={src}
    />
  ))
  .add('valencia', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="valencia"
      src={src}
    />
  ))
  .add('xpro2', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="xpro2"
      src={src}
    />
  ))
  .add('sierra', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="sierra"
      src={src}
    />
  ))
  .add('willow', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="willow"
      src={src}
    />
  ))
  .add('lofi', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="lofi"
      src={src}
    />
  ))
  .add('earlybird', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="earlybird"
      src={src}
    />
  ))
  .add('brannan', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="brannan"
      src={src}
    />
  ))
  .add('inkwell', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="inkwell"
      src={src}
    />
  ))
  .add('hefe', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="hefe"
      src={src}
    />
  ))
  .add('nashville', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="nashville"
      src={src}
    />
  ))
  .add('sutro', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="sutro"
      src={src}
    />
  ))
  .add('toaster', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="toaster"
      src={src}
    />
  ))
  .add('walden', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="walden"
      src={src}
    />
  ))
  .add('nineteenseventyseven', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="nineteenseventyseven"
      src={src}
    />
  ))
  .add('kelvin', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="kelvin"
      src={src}
    />
  ))
  ;

storiesOf('Prop tips', module)
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
