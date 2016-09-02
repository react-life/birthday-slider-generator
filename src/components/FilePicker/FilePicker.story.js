import React from 'react';
import storiesOf from 'helpers/storiesOf';
import FilePicker from './FilePicker';

storiesOf('FilePicker')
  .addWithInfo('Default', () => (
    <FilePicker id='FilePickerStory' />
  ))
  .addWithInfo('Логотип', () => (
    <FilePicker
      id='FilePickerStory'
      title='Логотип'
      fileTitle='Изменить логотип'
    />
  ))
  .addWithInfo('Image', () => (
    <FilePicker
      id='FilePickerStory'
      url='https://vajak.ru/upload/iblock/6e9/6e901f3abfea84cd26caebdc2b0ebc99.jpg'
    />
  ));
