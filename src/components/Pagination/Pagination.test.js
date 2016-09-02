import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import PaginationComponent from './Pagination';

test('should render normal without any props supplied', () => {
  const Pagination = shallow(<PaginationComponent />);

  expect(Pagination).to.have.length(1);
});
