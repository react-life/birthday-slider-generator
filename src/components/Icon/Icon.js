import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import cssModules from 'helpers/cssModules';

import styles from './Icon.sss';

@pureRender
@cssModules(styles)
export default class Icon extends Component {
  static propTypes = {
    icon: PropTypes.string,
  };

  render() {
    let icon;
    try {
      icon = require(`./icons/${this.props.icon}.svg`); // eslint-disable-line global-require
    } catch (err) {
      return null;
    }

    return (
      <span
        styleName='icon'
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    );
  }
}
