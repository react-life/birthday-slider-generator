import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Button from './Button';
import Icon from '../Icon';

storiesOf('Button')
  .addWithInfo('Default', () => (
    <Button>
      Активно
    </Button>
  ))
  .addWithInfo('Href', () => (
    <Button href='http://g.co'>
      Активно
    </Button>
  ))
  .addWithInfo('Link with object to', () => (
    <Button to={{ pathname: '/test', query: { select: 12 } }}>
      Активно
    </Button>
  ))
  .addWithInfo('Block', () => (
    <Button block>
      Активно
    </Button>
  ))
  .addWithInfo('Disabled', () => (
    <Button disabled>
      Неактивно
    </Button>
  ))
  .addWithInfo('White', () => (
    <div style={{ backgroundColor: '#333', padding: 8, margin: -8 }}>
      <Button color='white'>
        Активно
      </Button>
    </div>
  ))
  .addWithInfo('Blue', () => (
    <Button color='blue'>
      Активно
    </Button>
  ))

  .addWithInfo('Progress', () => (
    <Button theme='progress' disabled>
      Неактивно
    </Button>
  ))
  .addWithInfo('Bordered', () => (
    <Button bordered>
      Активно
    </Button>
  ))
  .addWithInfo('Bordered Disabled', () => (
    <Button bordered disabled>
      Неактивно
    </Button>
  ))
  .addWithInfo('Bordered White', () => (
    <div style={{ backgroundColor: '#333', padding: 8, margin: -8 }} >
      <Button bordered color='white'>
        Активно
      </Button>
    </div>
  ))
  .addWithInfo('Bordered White Disabled', () => (
    <div style={{ backgroundColor: '#333', padding: 8, margin: -8 }}>
      <Button bordered disabled color='white'>
        Неактивно
      </Button>
    </div>
  ))
  .addWithInfo('Bordered Blue', () => (
    <Button bordered color='blue'>
      Активно
    </Button>
  ))
  .addWithInfo('Bordered Blue Disabled', () => (
    <Button bordered disabled color='blue'>
      Неактивно
    </Button>
  ))
  .addWithInfo('Size Small', () => (
    <Button small>
      Активно
    </Button>
  ))
  .addWithInfo('Small White', () => (
    <div style={{ backgroundColor: '#333', padding: 8, margin: -8 }}>
      <Button small color='white'>
        Активно
      </Button>
    </div>
  ))
  .addWithInfo('Small Blue', () => (
    <Button small color='blue'>
      Активно
    </Button>
  ))
  .addWithInfo('Small Bordered', () => (
    <Button bordered small>
      Активно
    </Button>
  ))
  .addWithInfo('Small Bordered White', () => (
    <div style={{ backgroundColor: '#333', padding: 8, margin: -8 }}>
      <Button bordered small color='white'>
        Активно
      </Button>
    </div>
  ))
  .addWithInfo('Small Bordered Blue', () => (
    <Button bordered small color='blue'>
      Активно
    </Button>
  ))
  .addWithInfo('Icon', () => (
    <Button bordered small color='blue'>
      <span style={{ height: 12, marginRight: 2 }}>
        <Icon icon='arrow' />
      </span> Активно
    </Button>
  ));
