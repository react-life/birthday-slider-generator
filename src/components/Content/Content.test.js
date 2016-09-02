import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Content from './Content';

test('should render normal without any props supplied', () => {
  const content = shallow(<Content />);

  expect(content).to.have.length(1);
});
