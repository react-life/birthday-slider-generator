import React from 'react';
import storiesOf from 'helpers/storiesOf';
import Month from './Month';
import Birthday from 'components/Birthday';

storiesOf('Month')
  .addWithInfo('Default', () => (
    <div>
    {[11,10,9,8,7,6,5,4,3,2,1,0].map(month => (<Month
    	month={month}
      dayHeight={20}
    >
      <Birthday
        date={`2016-${month + 1 < 10 ? '0' + (month + 1) : (month + 1)}-${Math.floor(Math.random() * (28 - 10) + 10)}`}
        name="Иван Петров"
      />
      <Birthday
        date={`2016-${month + 1 < 10 ? '0' + (month + 1) : (month + 1)}-${Math.floor(Math.random() * (28 - 10) + 10)}`}
        name="Петр Иванов"
      />
    </Month>))}
    </div>
  ))
