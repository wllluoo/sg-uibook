import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SgButton } from 'sng-ui';

storiesOf('Button', module)
  .add('with text', () => (
    <span>Hello Button</span>
  ))
  .add('with sng-ui', () => (
    <SgButton onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></SgButton>
  ));  
  
