import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Text from './Text';

test('should render normal without any props supplied', () => {
  const text = shallow(<Text />);

  expect(text).to.have.length(1);
});
