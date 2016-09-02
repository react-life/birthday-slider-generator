import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import cssModules from 'helpers/cssModules';

import styles from './Title.sss';

@pureRender
@cssModules(styles)
export default class Title extends Component {
  static propTypes = {
    size: PropTypes.oneOf([
      'big',
      'medium',
    ]),
    children: PropTypes.node,
    component: PropTypes.string,
    align: PropTypes.string,
    weight: PropTypes.number,
  };

  getComponentBySize(size) {
    const map = {
      big: 'h1',
      medium: 'h3',
    };

    return map[size] || 'h2';
  }

  render() {
    const { size, component, align, weight } = this.props;
    const Tag = component || this.getComponentBySize(size);

    return (
      <Tag
        styleName={classNames({
          title: true,
          [`title_size_${size}`]: size,
          [`title_align_${align}`]: align,
          [`title_weight_${weight}`]: weight,
        })}
      >
        {this.props.children}
      </Tag>
    );
  }
}
