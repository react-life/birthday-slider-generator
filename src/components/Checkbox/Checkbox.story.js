import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Checkbox from './Checkbox';

storiesOf('Checkbox')
  .addMap({
    onChange: 'checked',
  })
  .addWithInfo('Default', () => (
    <Checkbox id='checkboxInStoryBook' />
  ))
  .addWithInfo('Text', () => (
    <Checkbox id='checkboxInStoryBook'>
      Checkbox text
    </Checkbox>
  ))
  .addWithInfo('Big Text', () => (
    <Checkbox id='checkboxInStoryBook' size='big'>
      Checkbox text
    </Checkbox>
  ))
  .addWithInfo('Full & Checked', () => (
    <Checkbox id='checkboxInStoryBook' name='checkboxInStoryBook' checked>
      Очень <b>Важный</b> текст
    </Checkbox>
  ));
