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
    editable: PropTypes.bool,
    controlPanel: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    onChangeSettings: () => {}
  }

  state = {
    imageDragging: false,
    startDragPosition: null,
  }

  setSettings = (key, value) => {
    if (!key) return;
    /*if (key === 'backgroundSize') {
      this.setState({
        customSize: value === 'custom',
      })
    }*/
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

  renderSettings() {
    const {
      backgroundColor,
      backgroundImage,
      backgroundSize,
      backgroundPositionX,
      backgroundPositionY,
      backgroundOffsetX,
      backgroundOffsetY,
      backgroundRepeat,
      controlPanel
    } = this.props;

    const disabled = !backgroundImage;

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
          <FieldSet title='Background image' width='200px'>
            <div styleName='field'>
              <Input
                label='URL'
                name='backgroundImage'
                value={backgroundImage}
                onChange={this.setSettings}
              />
            </div>

            <div styleName='field'>
              <Input
                type='select'
                label='Size'
                name='backgroundSize'
                value={backgroundSize}
                items={['auto', 'cover', 'contain', 'custom']}
                onChange={this.setSettings}
                disabled={disabled}
              />
            </div>

            <div styleName='field'>
              <Input
                type='select'
                label='Repeat'
                name='backgroundRepeat'
                value={backgroundRepeat}
                items={['repeat', 'repeat-x', 'repeat-y', 'no-repeat']}
                onChange={this.setSettings}
                disabled={disabled}
              />
            </div>

            <div styleName='field field_flex'>
              <div styleName='limited'>
                <Input
                  type='select'
                  label='Position'
                  name='backgroundPositionX'
                  value={backgroundPositionX}
                  items={['left', 'right', 'center']}
                  onChange={this.setSettings}
                  disabled={disabled}
                />
              </div>
              <div styleName='limited'>
                <Input
                  type='select'
                  name='backgroundPositionY'
                  value={backgroundPositionY}
                  items={['top', 'bottom', 'center']}
                  onChange={this.setSettings}
                  disabled={disabled}
                />
              </div>
            </div>
            <div styleName='field field_flex'>
              <div styleName='limited'>
                <Input
                  label='Offset'
                  name='backgroundOffsetX'
                  value={backgroundOffsetX}
                  onChange={this.setSettings}
                  disabled={disabled}
                />
              </div>
              <div styleName='limited'>
                <Input
                  name='backgroundOffsetY'
                  value={backgroundOffsetY}
                  onChange={this.setSettings}
                  disabled={disabled}
                />
              </div>
              <div styleName='hint'>
                Drag image for set offset
              </div>
            </div>
          </FieldSet>
        </div>
      </div>
    );
  }

  getBackgroundPosition() {
    const {
      backgroundPositionX: px,
      backgroundPositionY: py,
      backgroundOffsetX: ox,
      backgroundOffsetY: oy,
    } = this.props;

    return `${px || ''}${ox && ' '+ox+'px'}${py && ' '+py}${oy && ' '+oy+'px'}`;
  }

  render() {  
    const {
      backgroundColor,
      backgroundImage,
      backgroundSize,
      backgroundRepeat,
      editable,
      children
    } = this.props;

    const backgroundPosition = this.getBackgroundPosition();

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
