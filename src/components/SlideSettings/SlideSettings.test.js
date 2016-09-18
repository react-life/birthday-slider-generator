import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SlideSettings from './SlideSettings';

test('should render normal without any props supplied', () => {
  const SlideSettings = shallow(<SlideSettings />);

  expect(SlideSettings).to.have.length(1);
});
