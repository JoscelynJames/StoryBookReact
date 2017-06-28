/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import 'babel-polyfill';
import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
