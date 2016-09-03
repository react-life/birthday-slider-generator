import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SliderPreview from './SliderPreview';

test('should render normal without any props supplied', () => {
  const sliderPreview = shallow(<SliderPreview />);

  expect(sliderPreview).to.have.length(1);
});
