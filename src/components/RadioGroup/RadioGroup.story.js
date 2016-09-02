import React from 'react';
import storiesOf from 'helpers/storiesOf';
import RadioGroup from 'components/RadioGroup';

const radioData = {
  name: 'storyRadioGroup',
  items: [
    {
      id: 'storyRadio1',
      value: 'valueStoryRadio1',
      content: 'Radio1',
    },
    {
      id: 'storyRadio2',
      value: 'valueStoryRadio2',
      content: 'Radio2',
    },
    {
      id: 'storyRadio3',
      value: 'valueStoryRadio3',
      content: 'Radio3',
    },
  ],
};

const radioDataColumn = {
  name: 'storyRadioGroup',
  theme: 'column',
  value: 'valueStoryRadio2',
  items: [
    {
      id: 'storyRadio1',
      value: 'valueStoryRadio1',
      content: 'Radio1',

    },
    {
      id: 'storyRadio2',
      value: 'valueStoryRadio2',
      content: 'Radio2',
    },
    {
      id: 'storyRadio3',
      value: 'valueStoryRadio3',
      content: 'Radio3',
    },
  ],
};

storiesOf('RadioGroup')
  .addMap({
    onChange: 'value',
  })
  .addWithInfo('Default', () => (
    <RadioGroup {...radioData} />
  ))
  .addWithInfo('Style Column', () => (
    <RadioGroup {...radioDataColumn} />
  ));
