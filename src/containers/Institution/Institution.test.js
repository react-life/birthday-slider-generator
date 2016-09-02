import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Institution from './Institution';

test('should render normal without any props supplied', () => {
  const institution = shallow(<Institution />);

  expect(institution).to.have.length(1);
});
