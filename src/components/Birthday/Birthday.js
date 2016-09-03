import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import moment from 'moment';
import classNames from 'classnames';
import cssModules from 'helpers/cssModules';

import styles from './Birthday.sss';

moment.locale('ru');

@pureRender
@cssModules(styles)
export default class Birthday extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }

  render() {
    const { date, name } = this.props;

    return (
      <div styleName='birthday'>
        {name}
      </div>
    );
  }
}
