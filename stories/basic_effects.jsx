import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@kadira/storybook';
import ImageProcessor from '../src/image_processor';
import src from './sample.jpg';

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
  ))
  ;
