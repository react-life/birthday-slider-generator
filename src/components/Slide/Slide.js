import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import { DraggableCore } from 'react-draggable';
import { SketchPicker } from 'react-color';
import SlideSettings from 'components/SlideSettings';
import R from 'ramda';
import cssModules from 'helpers/cssModules';


import styles from './Slide.sss';

@pureRender
@cssModules(styles)
export default class Slide extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundSize: PropTypes.string,
    backgroundPositionX: PropTypes.string,
    backgroundPositionY: PropTypes.string,
    backgroundOffsetX: PropTypes.string,
    backgroundOffsetY: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    onChange: PropTypes.func,
    expand: PropTypes.bool,
    editable: PropTypes.bool,
    children: PropTypes.node,
  }

  state = {
    onStartDrag: [],
  }

  getCalcValue(val1, val2) {
    if (!val2) {
      return val1;
    }
    const op = val2 > 0 ? '+' : '-';
    return `calc(${val1} ${op} ${Math.abs(val2)}px)`;
  }

  startDrag = e => {
    const { editable, expand } = this.props;
    if (!editable || !expand) {
      return;
    }
    this.setState({
      onStartDrag: [e.pageX, e.pageY],
    })
  }

  handleDrag = e => {
    const { onStartDrag } = this.state;
    if (!onStartDrag.length) {
      return;
    }
    const { backgroundOffsetX: ox, backgroundOffsetY: oy } = this.props;
    const { pageX, pageY } = e;
    const dx = pageX - onStartDrag[0];
    const dy = pageY - onStartDrag[1];
    this.props.onChange({
      backgroundOffsetX: ox * 1 + dx,
      backgroundOffsetY: oy * 1 + dy,
    })
    this.setState({
      onStartDrag: [pageX, pageY],
    })
  }

  stopDrag = event => {
    this.setState({ onStartDrag: [] });
  }


  render() {  
    const { children, styles, editable, ...props } = this.props;
    const { 
      backgroundColor,
      backgroundImage,
      backgroundSize,
      backgroundRepeat,
      backgroundPositionX: px,
      backgroundPositionY: py,
      backgroundOffsetX: ox,
      backgroundOffsetY: oy,
    } = props;

    const backgroundPosition = `${this.getCalcValue(px, ox)} ${this.getCalcValue(py, oy)}`;
    return (
      <DraggableCore
        onStart={this.startDrag}
        onDrag={this.handleDrag}
        onStop={this.stopDrag}
      >
        <div
          styleName='slide'
          ref={ref => this.slideRef = ref}
          onMouseDown={this.startDragImage}
          onMouseMove={this.dragImage}
          style={{
            backgroundColor,
            backgroundImage: backgroundImage && `url(${backgroundImage})`,
            backgroundSize,
            backgroundPosition,
            backgroundRepeat,
          }}
        >
          {children}
          {editable && <SlideSettings {...props} />}
        </div>
      </DraggableCore>
    );
  }
}
