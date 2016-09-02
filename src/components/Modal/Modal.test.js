import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Modal from './Modal';

test('should render normal without any props supplied', () => {
  const modal = shallow(<Modal />);

  expect(modal).to.have.length(1);
});
