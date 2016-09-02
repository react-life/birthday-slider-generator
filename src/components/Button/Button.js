import React, { Component, PropTypes } from 'react';
import { Link as LinkRR } from 'react-router';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import cssModules from 'helpers/cssModules';
import styles from './Button.sss';

@pureRender
@cssModules(styles)
export default class Button extends Component {
  static propTypes = {
    color: PropTypes.oneOf(['white', 'blue']),
    onClick: PropTypes.func,
    href: PropTypes.string,
    to: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    bordered: PropTypes.bool,
    small: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    type: PropTypes.bool,
    theme: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    onClick: () => {},
    disabled: false,
    block: false,
    small: false,
    bordered: false,
    type: 'button',
  }

  render() {
    const { href, to, onClick, disabled, color,
      children, small, block, bordered, type, theme } = this.props;

    let ComponentName = 'button';
    if (to) {
      ComponentName = LinkRR;
    }
    if (href) {
      ComponentName = 'a';
    }

    return (
      <ComponentName
        onClick={onClick}
        styleName={classNames('button', {
          button_block: block,
          button_small: small,
          button_bordered: bordered,
          button_color_white: color === 'white',
          button_color_blue: color === 'blue',
          [`button_theme_${theme}`]: theme,
        })}
        disabled={disabled}
        href={href}
        type={ComponentName === 'button' ? type : null}
      >
        {children}
      </ComponentName>
    );
  }
}
