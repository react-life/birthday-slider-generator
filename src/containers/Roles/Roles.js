import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import Helmet from 'react-helmet';

import Content from 'components/Content';

@pureRender
export default class RolesContainer extends Component {
  render() {
    return (
      <Content>
        <Helmet title='Роли и права' />
        Роли и права
      </Content>
    );
  }
}
