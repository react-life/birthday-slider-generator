import React from 'react';
import storiesOf from 'helpers/storiesOf';
import SliderPreview from './SliderPreview';

storiesOf('SliderPreview')
  .addWithInfo('Default', () => (
    <SliderPreview
    	id='123'
    	name='Сергей Каринский'
    	dativeName='Сергею Каринскому'
    	date='2016-04-24'
    	year={1992}
    />
  ))
