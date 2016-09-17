import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import { SketchPicker } from 'react-color';
import cssModules from 'helpers/cssModules';

import FieldSet from 'components/FieldSet';
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
    this.props.onChangeSettings(key, value);
  }

  toggleControlPanel = () => {
    this.setSettings('controlPanel', !this.props.controlPanel)
  }

  handleChangeColor = color => {
    this.setSettings('backgroundColor', color.hex);
  }

  startDragImage = event => {
    const { editable, backgroundImage } = this.props;
    if (!editable || !backgroundImage) return;
    this.setState({
      imageDragging: true,
      startDragPosition: [event.pageX, event.pageY],
    });
  }

  dragImage = event => {
    const { imageDragging, startDragPosition } = this.state;
    if (!imageDragging) return;
    const { backgroundOffsetX, backgroundOffsetY } = this.props;
    const ox = parseInt(backgroundOffsetX, 10) || 0;
    const oy = parseInt(backgroundOffsetY, 10) || 0;
    const { pageX, pageY } = event;
    const dx = pageX - startDragPosition[0];
    const dy = pageY - startDragPosition[1];
    this.setSettings('backgroundOffsetX', `${dx + ox}`);
    this.setSettings('backgroundOffsetY', `${dy + oy}`);
    this.setState({
      startDragPosition: [pageX, pageY],
    });
  }

  stopDragImage = event => {
    this.setState({
      imageDragging: false,
      startDragPosition: null,
    });
  }

  renderInput(props, i) {
    return (
      <Input
        {...props}
        key={i}
        value={this.props[props.name]}
        onChange={this.setSettings}
      />
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
          this.renderInput(field, i)}
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
    const {
      backgroundColor,
      settings,
      controlPanel
    } = this.props;

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

  getBackgroundPosition(px, py, ox, oy) {
    let position = '';
    if (px) {
      position += `${px} `;
    }
    if (ox && ox !== '0') {
      position += `${ox}px `;
    }
    if (py) {
      position += `${py} `;
    }
    if (oy && oy !== '0') {
      position += `${oy}px`;
    }
    return position;
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
      editable,
      children
    } = this.props;

    const backgroundPosition = this.getBackgroundPosition(px, py, ox, oy);

    return (
      <div
        styleName='slide'
        onMouseDown={this.startDragImage}
        onMouseMove={this.dragImage}
        onMouseUp={this.stopDragImage}
        style={{
          backgroundColor,
          backgroundImage: backgroundImage && `url(${backgroundImage})`,
          backgroundSize,
          backgroundPosition,
          backgroundRepeat,
        }}
      >
        {children}
        {editable && this.renderSettings()}
      </div>
    );
  }
}
