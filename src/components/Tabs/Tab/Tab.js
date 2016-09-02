import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import cssModules from 'helpers/cssModules';

import styles from './Tab.sss';

@pureRender
@cssModules(styles)
export default class Tab extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render() {
    return (
      <div styleName='tab'>
        {this.props.children}
      </div>
    );
  }
}
