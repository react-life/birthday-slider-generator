import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import moment from 'moment';
import { range } from 'ramda';
import cssModules from 'helpers/cssModules';

import Month from 'components/Month';

import styles from './Year.sss';

moment.locale('ru');

@pureRender
@cssModules(styles)
export default class Year extends Component {
  static propTypes = {
    year: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element,
    ]).isRequired,
  }

  static defaultProps = {
    year: moment().year(),
  }

  render() {
    const { year, children } = this.props;
    
    return (
      <div styleName='year'>
        {React.Children.map(this.props.children, child => (React.cloneElement(child, { year })))}
      </div>
    );
  }
}
