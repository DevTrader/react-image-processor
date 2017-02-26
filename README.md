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

Some effects support 'options' props:

```jsx
<ImageProcessor
  alt='react image sample'
  src='./path/to/image.jpg'
  effect='brighten'
  options={{ value: 50 }}
  />
```

## API

props   |  type   | isRequired |  description
--------|---------|------------|-----------------------------------------------------------------------
alt     | String  | isRequired |  Same attribute with `<img />` tag's
src     | String  | isRequired |  Same attribute with `<img />` tag's
effect  | oneOf   | isRequired |  One of [available effects](#available-effects) in lower case
options | Object  | optional   |  Options for each effects (e.g. 'value' for 'brighten' effect.)

### Available Effects

See Demo for example usage.

Some effects supports options.

- Basic filters
	- none
	- grayscale
	- sepia
	- luminance
	- brighten
	- darken
	- opacity
	- negaposi
	- brightnesscontrast
	- huerotate
	- saturate
	- horizontalflip
	- verticalflip
	- doubleflip
	- horizontalmirror
	- verticalmirror
	- xymirror
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
	- nineteenseventyseven
	- kelvin

## Future

- Improve perfomance in manipulating ImageData ( possibely with Web Worker API)
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
