import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import cssModules from 'helpers/cssModules';

import styles from './Icon.sss';

@pureRender
@cssModules(styles)
export default class Icon extends Component {
  static propTypes = {
    icon: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  render() {
    const { width, height } = this.props;
    let icon;
    try {
      icon = require(`./icons/${this.props.icon}.svg`); // eslint-disable-line global-require
    } catch (err) {
      return null;
    }

    return (
      <span
        styleName='icon'
        style={{
          width,
          height,
        }}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    );
  }
}
