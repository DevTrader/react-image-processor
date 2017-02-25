import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@kadira/storybook';
import ImageProcessor from '../src/image_processor';
import src from './sample.jpg';

storiesOf('<ImageProcessor />', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center' }}>
      {story()}
    </div>
  ))
  // --Start: Basic effects
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
  .add('saturate', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="saturate"
      src={src}
    />
  ))
  .add('brightnesscontrast', () => (
    <ImageProcessor
      alt="react story book sample image"
      effect="brightnesscontrast"
      src={src}
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
  ))
  // --End: Basic effects
  // --Start: Instagram effects
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
  // --End: Instagram effects
  ;
