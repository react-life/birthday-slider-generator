import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import Helmet from 'react-helmet';

import Content from 'components/Content';

@pureRender
export default class ProfileContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <Content>
        <Helmet title='Профиль' />
        Профиль
        <div style={{ height: 1500 }} />
        {this.props.children}
      </Content>
    );
  }
}
