import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import FieldSet from './FieldSet';

test('should render normal without any props supplied', () => {
  const fieldSet = shallow(<FieldSet />);

  expect(fieldSet).to.have.length(1);
});
