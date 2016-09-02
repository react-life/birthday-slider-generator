import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Field from './Field';

storiesOf('Field')
  .addMap({
    onChange: (value) => ({
      error: false,
      value,
    }),
  })
  .addWithInfo('Default', () => (
    <Field
      id='testField'
      name='testField'
      label='Label'
    />
  ))
  .addWithInfo('Required', () => (
    <Field
      id='testField'
      name='testField'
      label='Required'
      required
    />
  ))
  .addWithInfo('Placeholder', () => (
    <Field
      id='testField'
      name='testField'
      label='Placeholder Field'
      placeholder='Будет являться логином для входа на сайт'
    />
  ))
  .addWithInfo('Note', () => (
    <Field
      id='testField'
      name='testField'
      label='Тощая масса тела, кг.'
      note='6 сен / 2016'
    />
  ))
  .addWithInfo('Center text & Note', () => (
    <Field
      id='testField'
      name='testField'
      label='Тощая масса тела, кг.'
      note='6 сен / 2016'
      center
    />
  ))
  .addWithInfo('Password', () => (
    <Field
      type='password'
      id='testField'
      name='testField'
      label='пароль'
      center
    />
  ))
  .addWithInfo('Error', () => (
    <Field
      id='testField'
      name='testField'
      label='Error Field'
      value='Some Text'
      error
      required
    />
  ))
  .addWithInfo('Error + Error Text', () => (
    <Field
      id='testField'
      name='testField'
      label='Error Field'
      value='Some Text'
      error='Ошибка №927: Неизвестная ошибка'
      required
    />
  ))
  .addWithInfo('Error + Error Text + Note', () => (
    <Field
      id='testField'
      name='testField'
      label='Error Field'
      value='Some Text'
      error='Ошибка №927: Неизвестная ошибка'
      note='6 сен / 2016'
      required
    />
  ));
