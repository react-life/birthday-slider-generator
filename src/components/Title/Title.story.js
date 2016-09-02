import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Title from './Title';

storiesOf('Title')
  .addWithInfo('Default', () => (
    <Title>
      Заголовок
    </Title>
  ))
  .addWithInfo('Big', () => (
    <Title size='big'>
      Заголовок
    </Title>
  ))
  .addWithInfo('Medium', () => (
    <Title size='medium'>
      Заголовок
    </Title>
  ))
  .addWithInfo('Center', () => (
    <Title align='center'>
      Заголовок
    </Title>
  ));
