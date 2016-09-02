import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Text from './Text';

storiesOf('Text')
  .addWithInfo('Default', () => (
    <Text>
      Some text
    </Text>
  ))
  .addWithInfo('Multiline', () => (
    <div
      style={{
        width: 300,
        cursor: 'pointer',
      }}
    >
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Text>
    </div>
  ))
  .addWithInfo('Size-Medium', () => (
    <Text size='medium'>
      Some text
    </Text>
  ))
  .addWithInfo('Size-Big', () => (
    <Text size='big'>
      Some text
    </Text>
  ))
  .addWithInfo('Color-Gray', () => (
    <Text color='gray'>
      Some text
    </Text>
  ))
  .addWithInfo('Color-Inherit', () => (
    <div
      style={{
        color: 'red',
      }}
    >
      <Text color='inherit'>
        Some text
      </Text>
    </div>
  ))
  .addWithInfo('Bold', () => (
    <Text bold>
      Some text
    </Text>
  ))

  .addWithInfo('Theme Uppercase', () => (
    <Text theme='upper'>
      Some text
    </Text>
  ));
