import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Title from './Title';

test('should render normal without any props supplied', () => {
  const title = shallow(<Title />);

  expect(title).to.have.length(1);
});

test('should render h2 on default size', () => {
  const title = shallow(<Title>
    Title
  </Title>);

  expect(title.find('h2')).to.have.length(1);
});

test('should render h1 on big size', () => {
  const title = shallow(<Title size='big'>
    Title
  </Title>);

  expect(title.find('h1')).to.have.length(1);
});

test('should render h3 on medium size', () => {
  const title = shallow(<Title size='medium'>
    Title
  </Title>);

  expect(title.find('h3')).to.have.length(1);
});

test('should render custom component', () => {
  const title = shallow(<Title component='p'>
    Title
  </Title>);

  expect(title.find('p')).to.have.length(1);
});
