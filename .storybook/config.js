/* eslint import/no-extraneous-dependencies: 0 */
import {
  configure,
} from '@kadira/storybook';

function loadStories() {
  require('../stories/index.jsx');
}

configure(loadStories, module);
