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
  .add('grayscale', () => (
    <ImageProcessor
      src={src}
      effect='grayscale'
      />
  ));
