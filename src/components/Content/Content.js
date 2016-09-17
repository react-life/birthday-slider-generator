import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import cssModules from 'helpers/cssModules';

import styles from './Content.sss';

@pureRender
@cssModules(styles)
export default class Content extends Component {
  static propTypes = {
    left: PropTypes.string,
    top: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    return (
      <div styleName='content'>
        {this.props.children}
      </div>
    );
  }
}
