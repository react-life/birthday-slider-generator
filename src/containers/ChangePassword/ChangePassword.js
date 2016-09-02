import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import Helmet from 'react-helmet';

@pureRender
export default class ChangePasswordContainer extends Component {
  render() {
    return (
      <div>
        <Helmet title='ChangePassword' />
        ChangePassword
      </div>
    );
  }
}
