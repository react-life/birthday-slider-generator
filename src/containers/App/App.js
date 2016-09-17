import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import Helmet from 'react-helmet';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import config from 'config';

@DragDropContext(HTML5Backend)
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
