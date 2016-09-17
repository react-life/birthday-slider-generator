import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import Helmet from 'react-helmet';
import { DropTarget } from 'react-dnd';
import { ContentTypes } from 'utils/dnd';
import Slide from 'components/Slide';
import Content from 'components/Content';
import { slideSettings } from 'utils/settings';

@DropTarget(ContentTypes.name, ContentTypes.target, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
}))
@pureRender
export default class SlideContainer extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    clientOffset: PropTypes.object,
  }
  
  state = {
    backgroundColor: '',
    backgroundImage: '',
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backgroundPositionX: '0%',
    backgroundPositionY: '0%',
    backgroundOffsetX: '0',
    backgroundOffsetY: '0',
    videoSrc: [],
    videoControls: false,
    videoAutoplay: false,
    videoWidth: 'auto',
    videoHeight: 'auto',
    videoOffsetX: '0',
    videoOffsetY: '0',
    controlPanel: true,
  };

  handleChangeSettings = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  render() {
    const { connectDropTarget, clientOffset } = this.props;
    return connectDropTarget(
      <div>
        <Helmet title='Slide' />
        <div style={{ height: '100vh' }}>
          <Slide
            {...this.state}
            settings={slideSettings}
            onChangeSettings={this.handleChangeSettings}
            editable
          >
          </Slide>
        </div>
      </div>
    );
  }
}
