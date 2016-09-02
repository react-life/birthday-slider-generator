import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import Helmet from 'react-helmet';

@pureRender
export default class LoginContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <Helmet title='Login' />
        Login
        {this.props.children}
      </div>
    );
  }
}
