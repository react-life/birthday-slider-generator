import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import moment from 'moment';
import cssModules from 'helpers/cssModules';
import noun from 'helpers/noun';

import Link from 'components/Link';

import styles from './SliderPreview.sss';

moment.locale('ru');

@pureRender
@cssModules(styles)
export default class SliderPreview extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    dativeName: PropTypes.string,
    year: PropTypes.number,
    link: PropTypes.string,
  }

  render() {
    const { name, date, id, year, dativeName } = this.props;
    const link = this.props.link || id;
    const day = moment(date);
    const age = year ? day.year() - year : false;

    return (
      <div styleName='sliderPreview'>
        {day.isValid() && <div styleName='date date_header'>
          {day.format('D MMMM YYYY')}
        </div>}
        <div styleName='name'>
          {age ? dativeName || name : name}
        </div>
        {(day.isValid() && age) && <div styleName='date'>
          {dativeName
            ? `исполнилось ${age} ${noun(age, ['год', 'года', 'лет'])}`
            : `отпраздновал ${age}-летие`
          }
        </div>}
      </div>
    );
  }
}
