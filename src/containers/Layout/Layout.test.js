import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Layout from './Layout';

test('should render normal without any props supplied', () => {
  const layout = shallow(<Layout />);

  expect(layout).to.have.length(1);
});
