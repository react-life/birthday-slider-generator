import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Select from './Select';

test('should render normal without any props supplied', () => {
  const select = shallow(<Select />);

  expect(select).to.have.length(1);
});
