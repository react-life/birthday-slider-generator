import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';

@pureRender
export default class LayoutContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <Helmet title='Layout' />
        <Layout>
          {this.props.children}
        </Layout>
      </div>
    );
  }
}
