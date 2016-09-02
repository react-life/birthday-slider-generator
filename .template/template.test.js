import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import {BlockName} from './{BlockName}';

test('should render normal without any props supplied', () => {
  const {blockName} = shallow(<{BlockName} />);

  expect({blockName}).to.have.length(1);
});
