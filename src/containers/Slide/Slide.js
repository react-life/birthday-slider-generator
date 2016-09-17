import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import Helmet from 'react-helmet';
import Slide from 'components/Slide';

@pureRender
export default class SlideContainer extends Component {
  
  state = {
    backgroundColor: '',
    backgroundImage: '',
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backgroundPositionX: 'left',
    backgroundPositionY: 'top',
    backgroundOffsetX: '0',
    backgroundOffsetY: '0',
    controlPanel: false,
  };

  handleChangeSettings = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  render() {
    return (
      <div>
        <Helmet title='Slide' />
        <div style={{ height: '600px' }}>
          <Slide
            {...this.state}
            onChangeSettings={this.handleChangeSettings}
            editable
          >
          </Slide>
        </div>
      </div>
    );
  }
}
