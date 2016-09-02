import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import Helmet from 'react-helmet';

import Content from 'components/Content';

@pureRender
export default class StaffContainer extends Component {
  render() {
    return (
      <Content>
        <Helmet title='Персонал' />
        Персонал
      </Content>
    );
  }
}
