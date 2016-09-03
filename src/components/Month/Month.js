import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import moment from 'moment';
import cssModules from 'helpers/cssModules';

import styles from './Month.sss';

moment.locale('ru');

@pureRender
@cssModules(styles)
export default class Month extends Component {
	static propTypes = {
		month: PropTypes.number.isRequired,
    year: PropTypes.number,
		dayHeight: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element,
    ]).isRequired,
	}

	static defaultProps = {
    year: moment().year(),
		dayHeight: 5
	}

  render() {
  	const { month, dayHeight, year } = this.props;
  	const date = moment([ year ]).month(month);
  	const monthLocale = date.format('MMMM');
  	const monthHeight = dayHeight * date.daysInMonth();

    return (
      <div styleName='month'>
        <div styleName={classNames('title', 'title_month_' + month.toString())}>{monthLocale}</div>
        <div
          styleName={classNames('days', 'days_month_' + month.toString())}
          style={{
            height: monthHeight + 'px'
          }}
        >
          {React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { dayHeight })
          })}
        </div>
      </div>
    );
  }
}
