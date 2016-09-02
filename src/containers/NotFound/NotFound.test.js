import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NotFound from './NotFound';

test('should render normal without any props supplied', () => {
  const notFound = shallow(<NotFound />);

  expect(notFound).to.have.length(1);
});
