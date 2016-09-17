import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import cssModules from 'helpers/cssModules';

import styles from './Select.sss';

@pureRender
@cssModules(styles)
export default class Select extends Component {
  render() {
    return (
      <div styleName='select'>

      </div>
    );
  }
}
