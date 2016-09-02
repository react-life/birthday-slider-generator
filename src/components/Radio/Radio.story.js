import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Radio from 'components/Radio';

storiesOf('Radio')
  .addWithInfo('Default', () => (
    <Radio id='checkboxInStoryBook' />
  ))
  .addWithInfo('Text', () => (
    <Radio id='checkboxInStoryBook'>
      Radio
    </Radio>
  ))
  .addWithInfo('Full & Checked', () => (
    <Radio id='radioInStoryBook' name='radioInStoryBook' value='1' checked>
      Очень <b>Важный</b> текст
    </Radio>
  ));
