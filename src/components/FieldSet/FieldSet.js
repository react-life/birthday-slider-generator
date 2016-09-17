import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import cssModules from 'helpers/cssModules';

import styles from './FieldSet.sss';

@pureRender
@cssModules(styles)
export default class FieldSet extends Component {
  static propTypes = {
    title: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    const { title, children, width } = this.props;

    return (
      <div styleName='fieldSet' style={{ width }}>
        <div styleName='title'>{title}</div>
        <div styleName='content'>
          {children}
        </div>
      </div>
    );
  }
}
