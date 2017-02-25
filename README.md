# react-image-processor

> React Components built-in Image Processor.

<!-- TOC -->

- [react-image-processor](#react-image-processor)
  - [Demo](#demo)
  - [Install](#install)
  - [Usage](#usage)
  - [API](#api)
    - [Available Effects](#available-effects)
  - [Future](#future)
  - [License](#license)

<!-- /TOC -->

## Demo

https://kenju.github.io/react-image-processor/

## Install

```bash
npm install --save react-image-processor
```

or,

```bash
yarn add react-image-processor
```

## Usage

```jsx
<ImageProcessor
  alt='react image sample'
  src='./path/to/image.jpg'
  effect='grayscale'
  />
```

## API

props | type | description
------|------|--------------
alt   |String| Same attribute with `<img />` tag's
src   |String| Same attribute with `<img />` tag's
effect|oneOf | one of [available effects](#available-effects) all in smaller cases

### Available Effects

See [this file in `master` branch](https://github.com/kenju/react-image-processor/blob/master/src/effects_shape.js) for all updated available lists.

- Basic filters
	- grayscale
	- sepia
	- luminance
	- brighten
	- darken
	- opacity
	- negaposi
	- brightnessContrast
	- huerotate
	- saturate
	- horizontalFlip
	- verticalFlip
	- doubleFlip
	- horizontalMirror
	- verticalMirror
	- XYMirror
- Instagram filters
	- lark
	- reyes
	- juno
	- slumber
	- crema
	- ludwig
	- aden
	- perpetua
	- amaro
	- mayfair
	- rise
	- hudson
	- valencia
	- xpro2
	- sierra
	- willow
	- lofi
	- earlybird
	- brannan
	- inkwell
	- hefe
	- nashville
	- sutro
	- toaster
	- walden
	- nineteenSeventySeven
	- kelvin

## Future

- Improve perfomance in manipulating ImageData ( possibely with Web Worker API)
- Support 'options' props to some of effects (e.g. `huerotate`, `darken`, etc)
- Support plugin architecture ( ImageData |> Plugin Modules |> ImageData )
- Improve spec with ava

## License

Copyright (c) 2017 Kenju Wagatsuma

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
