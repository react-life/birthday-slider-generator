import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Icon from './Icon';

const icons = require.context('./icons/', true, /\.svg$/);

icons.keys().map((icon) => icon.slice(2, -4)).forEach((icon) =>
  storiesOf('Icon')
    .add(icon, () => (
      <div
        style={{
          width: 100,
          height: 100,
        }}
      >
        <Icon icon={icon} />
      </div>
    ))
);
