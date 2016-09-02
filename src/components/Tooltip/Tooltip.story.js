import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Tooltip from './Tooltip';

storiesOf('Tooltip')
  .addWithInfo('Default', () => (
    <Tooltip visible />
  ))
  .addWithInfo('Hidden', () => (
    <Tooltip />
  ))
  .addWithInfo('With content', () => (
    <Tooltip visible>
      Some content
    </Tooltip>
  ))
  .addWithInfo('progress', () => (
    <Tooltip visible progress>
      Some content
    </Tooltip>
  ));
