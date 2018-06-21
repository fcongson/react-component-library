import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Welcome } from '@storybook/react/demo';
import Button from '../lib/elements/Button';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add(
    'with text',
    withInfo('description or documentation about my component, supports markdown')(() => (
      <Button text="Hello Button" onClick={action('clicked')} />
    )),
  )
  .add(
    'with some emoji',
    withInfo('description or documentation about my component, supports markdown')(() => (
      <Button text="😀 😎 👍 💯" onClick={action('clicked')} />
    )),
  );
