import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Button from './Button';
import Icon from '../Icon';

storiesOf('Button')
  .addWithInfo('Default', () => (
    <Button>
      Активно
    </Button>
  ));
