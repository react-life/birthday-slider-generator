import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import Draggable from 'react-draggable';
import cssModules from 'helpers/cssModules';

import Button from 'components/Button';
import Icon from 'components/Icon';

import styles from './Content.sss';

@pureRender
@cssModules(styles)
export default class Content extends Component {
  static propTypes = {
    id: PropTypes.string,
    left: PropTypes.number,
    top: PropTypes.number,
    editable: PropTypes.bool,
    children: PropTypes.node,
  };

  static defaultProps = {
    left: 0,
    top: 0,
  }

  state = {
    left: this.props.left,
    top: this.props.top,
  }

  render() {
    const { editable, children } = this.props;
    const { left, top } = this.state;

    return (
      <Draggable>
        <div
          styleName={classNames('content', {
            content_editable: editable
          })}
          style={{ left, top }}
        >
          {children}
        </div>
      </Draggable>
    );
  }
}
