import React, { Component, PropTypes } from 'react';
import { Link as LinkRR } from 'react-router';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import cssModules from 'helpers/cssModules';
import styles from './Link.sss';

@pureRender
@cssModules(styles)
export default class Link extends Component {
  static propTypes = {
    color: PropTypes.oneOf(['white', 'blue']),
    size: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    to: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    isActive: PropTypes.bool,
    large: PropTypes.bool,
    bold: PropTypes.bool,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    onClick: () => {},
  }

  render() {
    const { href, to, onClick, isActive, color, children, large, bold } = this.props;

    const props = {};
    let ComponentName = 'button';
    if (to) {
      ComponentName = LinkRR;
      props.to = to;
      props.activeClassName = styles.link_active;
    }

    if (href) {
      ComponentName = 'a';
      props.href = href;
    }

    return (
      <ComponentName
        {...props}
        onClick={onClick}
        styleName={classNames('link', {
          link_active: isActive,
          link_size_large: large,
          link_theme_bold: bold,
          link_color_white: color === 'white',
          link_color_blue: color === 'blue',
        })}
      >
        {children}
      </ComponentName>
    );
  }
}
