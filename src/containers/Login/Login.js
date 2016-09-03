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
        <form action='/api/sliders' method='post'>
          <input type='text' name='user' value='Елизавета' />
          <input type='text' name='birthday' value='1996-08-09' />
          <input type='text' name='alias' value='owl' />
          <input type='submit' />
        </form>
        {this.props.children}
      </div>
    );
  }
}
