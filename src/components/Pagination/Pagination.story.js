import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Pagination from './Pagination';

storiesOf('Pagination')
  .addMap({
    onClick: 'current',
  })
  .addWithInfo('Default', () => (
    <Pagination pages={10} showArrows />
  ))
  .addWithInfo('With visiblePages', () => (
    <Pagination pages={10} visiblePages={5} showArrows />
  ))
  .addWithInfo('Without arrows', () => (
    <Pagination pages={10} current={3} />
  ))
  .addWithInfo('Large pagination', () => (
    <Pagination pages={14} visiblePages={7} isLarge showArrows showFirstAndLast />
  ));
