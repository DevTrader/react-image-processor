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
      src={src}
      effect="enhance"
    />
  ))
  .add('grayscale', () => (
    <ImageProcessor
      alt="react story book sample image"
      src={src}
      effect="grayscale"
    />
  ))
  .add('sepia', () => (
    <ImageProcessor
      alt="react story book sample image"
      src={src}
      effect="sepia"
    />
  ))
  .add('luminance', () => (
    <ImageProcessor
      alt="react story book sample image"
      src={src}
      effect="luminance"
    />
  ))
  .add('negaposi', () => (
    <ImageProcessor
      alt="react story book sample image"
      src={src}
      effect="negaposi"
    />
  ))
  ;
