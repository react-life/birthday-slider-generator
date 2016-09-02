import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import Helmet from 'react-helmet';

import config from 'config';

@pureRender
export default class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return (
      <div>
        <Helmet {...config.app.head} />
        {this.props.children}
      </div>
    );
  }
}
