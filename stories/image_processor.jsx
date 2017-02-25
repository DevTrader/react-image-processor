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
  ;
