import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Slide from './Slide';
import Content from 'components/Content';

storiesOf('Slide')
  .addWithInfo('Default', () => (
    <div style={{ height: '600px' }}>
      <Slide
        editable
      >
        <Content>Text 1</Content>
        <Content left='100px' top='200px'>Text 2</Content>
        <Content right='100px' bottom='50px'>Text 3</Content>
      </Slide>
    </div>
  ))
