import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import Helmet from 'react-helmet';

@pureRender
export default class SlidersContainer extends Component {
  render() {
    return (
      <div>
        <Helmet title='Sliders' />
      </div>
    );
  }
}
