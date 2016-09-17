import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import { SketchPicker } from 'react-color';
import R from 'ramda';
import cssModules from 'helpers/cssModules';

import FieldSet from 'components/FieldSet';
import Tabs from 'components/Tabs';
import Tab from 'components/Tabs/Tab';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Input from 'components/Input';

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
    videoSrc: PropTypes.array,
    videoControls: PropTypes.bool,
    videoAutoplay: PropTypes.bool,
    onChangeSettings: PropTypes.func,
    settings: PropTypes.array,
    editable: PropTypes.bool,
    controlPanel: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    settings: [],
    onChangeSettings: () => {}
  }

  state = {
    imageDragging: false,
    startDragPosition: null,
  }

  setSettings = (key, value) => {
    if (!key) return;
    if (typeof key === 'object') {
      Object.keys(key).map(item => this.props.onChangeSettings(item, key[item]));
    } else {
      this.props.onChangeSettings(key, value);
    }
  }

  toggleControlPanel = () => {
    this.setSettings('controlPanel', !this.props.controlPanel)
  }

  handleChangeColor = color => {
    this.setSettings('backgroundColor', color.hex);
  }

  canDragImage() {
    const { controlPanel, backgroundImage} = this.props;
    return controlPanel && backgroundImage && !this.state.imageDragging;
  }

  startDragImage = event => {
    if (!this.canDragImage() || event.target != this.slideRef) {
      return;
    }
    this.setState({
      imageDragging: true,
      startDragPosition: [event.pageX, event.pageY],
    });
    window.addEventListener('mouseup', this.stopDragImage);
  }

  dragImage = event => {
    const { imageDragging, startDragPosition } = this.state;
    if (!imageDragging) return;
    const { backgroundOffsetX: ox, backgroundOffsetY: oy } = this.props;
    const dx = event.pageX - startDragPosition[0] + parseInt(ox, 10);
    const dy = event.pageY - startDragPosition[1] + parseInt(oy, 10);
    this.setSettings({
      'backgroundOffsetX': `${dx}`,
      'backgroundOffsetY': `${dy}`,
    });
    this.setState({
      startDragPosition: [event.pageX, event.pageY],
    });
  }

  stopDragImage = event => {
    this.setState({
      imageDragging: false,
      startDragPosition: null,
    });
    window.removeEventListener('mouseup', this.stopDragImage);
  }

  renderInput(props, i) {
    return (
      <div>
        <Input
          {...props}
          key={i}
          value={this.props[props.name]}
          onChange={(name, value) => {
            if (props.handler) {
              value = props.handler(value);
            }
            this.setSettings(name, value);
          }}
        />
        {props.hint && <div styleName='hint'>
          {props.hint}
        </div>}
      </div>
    );
  }

  renderTabs(field, i) {
    const labels = R.pluck('label')(field.tabs);
    return (
      <Tabs labels={labels}>
        {field.tabs.map((item, i) => (
          <Tab key={i}>
            {this.renderInput(R.omit(['label'], item), i)}
          </Tab>
        ))}
      </Tabs>
    );
  }

  renderField(field, i) {
    return (
      <div
        key={i}
        styleName={classNames('field', {
          field_flex: Array.isArray(field),
        })}
      >
        {Array.isArray(field) ?
          field.map((props, num) => (
            <div styleName='limited'>
              {this.renderInput(props, num)}
            </div>
          )) :
          (
            field.tabs ? this.renderTabs(field, i) : this.renderInput(field, i)
          )}
      </div>
    );
  }

  renderFieldSet(item, i) {
    return (
      <FieldSet title={item.title} key={i}>
        {item.fields.map(this.renderField, this)}
      </FieldSet>
    );
  }

  renderSettings() {
    const { backgroundColor, settings, controlPanel, editable } = this.props;
    if (!editable) {
      return null;
    }

    return (
      <div styleName='controlPanel'>
        <div
          styleName={classNames('toggleControlPanel', {
            toggleControlPanel_active: controlPanel,
          })}
        >
          <Button
            onClick={this.toggleControlPanel}
            pressed={controlPanel}
            small
          >
            <Icon icon='settings' width={16} height={16} />
          </Button>
        </div>
        <div
          styleName={classNames('settings', {
            settings_visible: controlPanel,
          })}
        >
          <FieldSet title='Background color'>
            <SketchPicker
              color={backgroundColor || '#fff'}
              onChange={this.handleChangeColor}
            />
          </FieldSet>
          {settings.map(this.renderFieldSet, this)}
        </div>
      </div>
    );
  }

  getCalcValue(val1, val2) {
    if (!val2) {
      return val1;
    }
    const op = val2 > 0 ? '+' : '-';
    return `calc(${val1} ${op} ${Math.abs(val2)}px)`;
  }

  renderYoutubeFrame() {
    return null;
  }

  renderVideo() {
    const {
      videoSrc,
      videoAutoplay,
      videoControls,
      videoWidth,
      videoHeight,
      videoOffsetX,
      videoOffsetY,
    } = this.props;

    if (this.bgVideo) {
      videoAutoplay ? this.bgVideo.play() : this.bgVideo.pause();
    }

    return (
      <div styleName='videoContainer'>
        <video
          ref={ref => this.bgVideo = ref}
          styleName='video'
          style={{
            width: videoWidth,
            height: videoHeight,
            marginLeft: videoOffsetX,
            marginTop: videoOffsetY,
          }}
          controls={videoControls}
          autoPlay={videoAutoplay}
        >
          {
            videoSrc.map(src => {
              if (src.indexOf('youtu.be') !== -1) {
                return this.renderYoutubeFrame(src);
              }
              const ext = src.substr(src.lastIndexOf('.') + 1);
              if (!ext) return null;
              return <source src={src} type={`video/${ext}`} />;
            })
          }
        </video>
      </div>
    );
  }

  render() {  
    const {
      backgroundColor,
      backgroundImage,
      backgroundSize,
      backgroundRepeat,
      backgroundPositionX: px,
      backgroundPositionY: py,
      backgroundOffsetX: ox,
      backgroundOffsetY: oy,
      videoSrc,
      editable,
      children
    } = this.props;
    const backgroundPosition = `${this.getCalcValue(px, ox)} ${this.getCalcValue(py, oy)}`;
    return (
      <div
        styleName={classNames('slide', {
          slide_drag: this.canDragImage(),
        })}
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
        {videoSrc && videoSrc.length > 0 && this.renderVideo()}
        {children}
        {editable && this.renderSettings()}
      </div>
    );
  }
}
