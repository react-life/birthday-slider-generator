import React from 'react';
import storiesOf from 'helpers/storiesOf';
import { range } from 'ramda';
import Year from './Year';
import Month from 'components/Month';
import Day from 'components/Day';
import Birthday from 'components/Birthday';

const months = range(0, 12).reverse();

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const names = ['Иван', 'Петр', 'Алексей', 'Владислав', 'Андрей'];
const surnames = ['Иванов', 'Петров', 'Алексеев', 'Владиславин', 'Андреев'];
const days = {};

const persons = range(0, 70);
const orderedUsers = {};
const users = [];
persons.map(key => {
  const day = randomInt(1, 28);
  let m = key;
  while (m > 12) m -= 12;
  const year = randomInt(1965, 2000);
  const days = `${day < 10 ? '0' + day : day}`;
  const month = `${m < 10 ? '0' + m : m}`;
  const date = `${year}-${month}-${days}`;
  users.push({
    date,
    gender: 'male',
    name: `${names[randomInt(0, 4)]} ${surnames[randomInt(0, 4)]}`
  });
  if (!orderedUsers[m]) orderedUsers[m] = {};
  if (!orderedUsers[m][day]) orderedUsers[m][day] = [];
  orderedUsers[m][day].push({
    date,
    name: `${names[randomInt(0, 4)]} ${surnames[randomInt(0, 4)]}`
  });
})

storiesOf('Year')
  .addWithInfo('Default', () => (
    <Year>
      {months.map(month => {
        return (<Month
          month={month}
          dayHeight={20}
        >
          {orderedUsers[month + 1] && Object.keys(orderedUsers[month + 1]).reverse().map(key => {
            const day = orderedUsers[month + 1][key];
            return (<Day
              date={day[0].date}
            >
              {day.map(user => {
                return <Birthday date={user.date} name={JSON.stringify(users)} />
              })}
            </Day>);
          })}
        </Month>)
      })}
    </Year>
  ))
