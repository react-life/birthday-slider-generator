import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Link from './Link';

storiesOf('Link')
  .addWithInfo('Href', () => (
    <Link href='http://g.co'>
      Дневник питания
    </Link>
  ))
  .addWithInfo('Link', () => (
    <Link to='http://g.co'>
      Антропометрия и состав тела
    </Link>
  ))
  .addWithInfo('Link with object to', () => (
    <Link to={{ pathname: '/test', query: { select: 12 } }}>
      Антропометрия и состав тела
    </Link>
  ))
  .addWithInfo('Active Link', () => (
    <Link to='http://g.co' isActive>
      Регистрационные данные
    </Link>
  ))
  .addWithInfo('Link Button', () => (
    <Link>
      Регистрационные данные
    </Link>
  ))
  .addWithInfo('Active Link Button', () => (
    <Link isActive>
      Регистрационные данные
    </Link>
  ))
  .addWithInfo('White Href', () => (
    <div style={{ background: '#333' }}>
      <Link href='#' color='white'>
        Регистрационные данные
      </Link>
    </div>
  ))
  .addWithInfo('White Link', () => (
    <div style={{ background: '#333' }}>
      <Link to='#' color='white'>
        Регистрационные данные
      </Link>
    </div>
  ))
  .addWithInfo('White Button', () => (
    <div style={{ background: '#333' }}>
      <Link color='white'>
        Регистрационные данные
      </Link>
    </div>
  ))
  .addWithInfo('Blue Link', () => (
    <Link to='#' color='blue'>
      Регистрационные данные
    </Link>
  ))
  .addWithInfo('Blue Button', () => (
    <Link color='blue'>
      Регистрационные данные
    </Link>
  ))
  .addWithInfo('Big Link', () => (
    <Link to='#' large>
      Регистрационные данные
    </Link>
  ))
  .addWithInfo('Bold Link', () => (
    <Link to='#' bold>
      Регистрационные данные
    </Link>
  ))
  .addWithInfo('Large Bold Link', () => (
    <Link to='#' large bold>
      Регистрационные данные
    </Link>
  ));
