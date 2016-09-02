import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import cssModules from 'helpers/cssModules';

import styles from './{BlockName}.sss';

@pureRender
@cssModules(styles)
export default class {BlockName} extends Component {
  render() {
    return (
      <div styleName='{blockName}'>

      </div>
    );
  }
}
