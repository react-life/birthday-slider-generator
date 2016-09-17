import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import cssModules from 'helpers/cssModules';

import Button from 'components/Button';
import Icon from 'components/Icon';

import styles from './Content.sss';

@pureRender
@cssModules(styles)
export default class Content extends Component {
  static propTypes = {
    left: PropTypes.string,
    top: PropTypes.string,
    editable: PropTypes.bool,
    children: PropTypes.node,
  };

  render() {
    const { left, top, editable, children } = this.props;

    return (
      <div
        styleName={classNames('content', {
          content_editable: editable
        })}
        style={{ left, top }}
      >
        {children}
        {editable && <div styleName='controlPanel'>
          <Button
            theme='gray'
            small
          >
            <Icon icon='drag' width={16} height={16} />
          </Button>
        </div>}
      </div>
    );
  }
}
