import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import Helmet from 'react-helmet';
import Slide from 'components/Slide';
import SlideSettings from 'components/SlideSettings';
import Content from 'components/Content';
import { slideSettings } from 'utils/settings';

@pureRender
export default class SlideContainer extends Component {
  state = {
    backgroundColor: '',
    backgroundImage: '',
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backgroundPositionX: '0%',
    backgroundPositionY: '0%',
    backgroundOffsetX: '0',
    backgroundOffsetY: '0',
    expand: false,
  };

  handleChange = data => {
    this.setState(data)
  }

  render() {
    return (
      <div>
        <Helmet title='Slide' />
        <div style={{ height: '100vh' }}>

          <Slide
            onChange={this.handleChange}
            {...this.state}
            editable
          >
            <Content left={100} top={150} editable>
              Text here
            </Content>
          </Slide>
        </div>
      </div>
    );
  }
}
