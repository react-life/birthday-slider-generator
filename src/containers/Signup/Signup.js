import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import Helmet from 'react-helmet';

@pureRender
export default class SignupContainer extends Component {
  render() {
    return (
      <div>
        <Helmet title='Home' />
        Signup
      </div>
    );
  }
}
