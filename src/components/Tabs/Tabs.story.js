import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Tabs from './Tabs';
import Tab from './Tab';

storiesOf('Tabs')
  .addWithInfo('Default', () => (
    <Tabs labels={['Tab 1', 'Tab 2', 'Tab 3']}>
      <Tab>
        <div>Tab 1 content</div>
      </Tab>
      <Tab>
        <div>Tab 2 content</div>
      </Tab>
      <Tab>
        <div>Tab 3 content</div>
      </Tab>
    </Tabs>
  ))
  .addWithInfo('Tabs with default selected item', () => (
    <Tabs labels={['Tab 1', 'Tab 2', 'Tab 3']} defaultSelected={1}>
      <Tab>
        <div>Tab 1 content</div>
      </Tab>
      <Tab>
        <div>Tab 2 content</div>
      </Tab>
      <Tab>
        <div>Tab 3 content</div>
      </Tab>
    </Tabs>
  ))
  .addWithInfo('Tabs with selected item without onChange', () => (
    <Tabs labels={['Tab 1', 'Tab 2', 'Tab 3']} selected={0}>
      <Tab>
        <div>Tab 1 content</div>
      </Tab>
      <Tab>
        <div>Tab 2 content</div>
      </Tab>
      <Tab>
        <div>Tab 3 content</div>
      </Tab>
    </Tabs>
  ))
  .addMap({
    onChange: 'selected',
  })
  .addWithInfo('Tabs with selected item', () => (
    <Tabs labels={['Tab 1', 'Tab 2', 'Tab 3']} selected={0}>
      <Tab>
        <div>Tab 1 content</div>
      </Tab>
      <Tab>
        <div>Tab 2 content</div>
      </Tab>
      <Tab>
        <div>Tab 3 content</div>
      </Tab>
    </Tabs>
  ));
