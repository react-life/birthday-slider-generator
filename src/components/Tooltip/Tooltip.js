import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import cssModules from 'helpers/cssModules';

import styles from './Tooltip.sss';

@pureRender
@cssModules(styles)
export default class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.node,
    visible: PropTypes.bool,
    progress: PropTypes.bool,
  };

  static defaultProps = {
    visible: false,
    progress: false,
  }

  render() {
    const { visible, progress } = this.props;

    return (
      <div
        styleName={classNames('tooltip', {
          tooltip_state_visible: visible,
          tooltip_theme_progress: progress,
        })}
      >
        {this.props.children}
      </div>
    );
  }
}
