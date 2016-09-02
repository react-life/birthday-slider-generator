import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import cssModules from 'helpers/cssModules';

import styles from './Text.sss';

@pureRender
@cssModules(styles)
export default class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.string,
    component: PropTypes.string,
    color: PropTypes.oneOf([
      'gray',
    ]),
    size: PropTypes.oneOf([
      'medium',
      'big',
    ]),
    bold: PropTypes.bool,
  };

  static defaultProps = {
    component: 'p',
  };

  render() {
    const { color, size, bold, component, theme } = this.props;
    const Tag = component;

    return (
      <Tag
        styleName={classNames({
          text: true,
          text_bold: bold,
          [`text_color_${color}`]: color,
          [`text_size_${size}`]: size,
          [`text_theme_${theme}`]: theme,
        })}
      >
        {this.props.children}
      </Tag>
    );
  }
}
