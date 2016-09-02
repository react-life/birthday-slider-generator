import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Journal from './Journal';

test('should render normal without any props supplied', () => {
  const journal = shallow(<Journal />);

  expect(journal).to.have.length(1);
});
