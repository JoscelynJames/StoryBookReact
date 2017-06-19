/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Message from '../components/Message';

storiesOf('Message', module)
  .add('Hello World', () => <Message text="Hello world" />)
  .add("What's the time?", () => <Message text={new Date().toString()} />)
