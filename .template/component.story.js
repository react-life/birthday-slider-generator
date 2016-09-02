import React from 'react';
import storiesOf from 'helpers/storiesOf';
import {BlockName} from './{BlockName}';

storiesOf('{BlockName}')
  .addWithInfo('Default', () => (
    <{BlockName} />
  ))
