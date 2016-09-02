import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Content from './Content';

storiesOf('Content')
  .addWithInfo('Default', () => (
    <div
      style={{
        backgroundColor: '#f0f0f0',
      }}
    >
      <Content>
        Some content
      </Content>
    </div>
  ));
