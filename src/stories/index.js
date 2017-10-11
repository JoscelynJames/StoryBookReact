/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Message from '../components/Message';
import Timer from '../components/Timer';
import CartHeader from '../components/CartHeader';
import CartFooter from '../components/CartFooter';
import CartItems from '../components/CartItems';
import ShoppingCart from '../components/ShoppingCart';


storiesOf('Message', module)
  .add('Hello World', () => <Message text="Hello world" />)
  .add("What's the time?", () => <Message text={new Date().toString()} />)
  .add('poptarts', () => <Message text="poptarts"/>)

storiesOf('Timer', module)
  .add('Show', () => <Timer />)

storiesOf('ShoppingCart', module)
  .add('Header', () => <CartHeader />)
  .add('Footer', () => <CartFooter copywrite="1999"/>)
  .add('Items', () => <CartItems />)
  .add('ShoppingCart', () => <ShoppingCart copywrite="2012"/>)
