import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import moment from 'moment';
import classNames from 'classnames';
import cssModules from 'helpers/cssModules';

import styles from './Day.sss';

moment.locale('ru');

@pureRender
@cssModules(styles)
export default class Day extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    year: PropTypes.number,
    dayHeight: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element,
    ]).isRequired,
  }

  static defaultProps = {
    dayHeight: 5,
    year: moment().year()
  }

  render() {
    const { date, year, dayHeight, reverse, children } = this.props;
    const momentDate = moment(date).isValid() ? moment(date) : moment();
    const daysToMonthEnd = Math.max(momentDate.daysInMonth() - momentDate.date(), 0);
    const month = momentDate.month();
    const top = daysToMonthEnd * dayHeight + 'px';

    return (
      <div
        styleName={classNames('day', 'day_month_' + month, {
          day_reverse: reverse
        })}
        style={{ top }}
      >
        <div
          styleName={classNames('date', {
            date_reverse: reverse
          })}
        >
          {momentDate.format('D MMMM')}
        </div>
        <div styleName='name'>
          {React.Children.map(children, child => (child))}
        </div>
      </div>
    );
  }
}
