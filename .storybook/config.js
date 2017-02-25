import { configure, addDecorator } from '@kadira/storybook';

function loadStories() {
  require('../stories/image_processor.jsx');
}

configure(loadStories, module);
