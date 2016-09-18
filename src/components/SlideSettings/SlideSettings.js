import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import cssModules from 'helpers/cssModules';
import FieldSet from 'components/FieldSet';
import Input from 'components/Input';
import Button from 'components/Button';
import Icon from 'components/Icon';
import styles from './SlideSettings.sss';

@pureRender
@cssModules(styles)
export default class SlideSettings extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundSize: PropTypes.string,
    backgroundPositionX: PropTypes.string,
    backgroundPositionY: PropTypes.string,
    backgroundOffsetX: PropTypes.string,
    backgroundOffsetY: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    expand: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    backgroundImage: '',
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    onChange: () => {}
  }

  state = {
    imageLoaded: false,
    imageFailed: false,
  }

  handleChange = event => {
    const { target } = event;
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.props.onChange({
      [name]: value,
    })
  }

  componentDidMount() {
    this.img = new Image();
    this.img.onload = () => this.setState({ imageLoaded: true, imageFailed: false })
    this.img.onerror = () => this.setState({ imageLoaded: false, imageFailed: true })
  }

  detectImage = url => {
    const src = typeof url === 'object' ? url.target.value : url;
    this.img.src = src;
    this.props.onChange({
      'backgroundImage': src,
    })
  }

  renderControlPanel() {
    const { expand, onChange } = this.props;

    return (
      <div styleName='SlideSettings'>

        <div styleName='settingsButton'>
          <Button
            onClick={() => onChange({ expand: !expand })}
            small
          >
            <Icon icon='settings' width={16} height={16} />
          </Button>
        </div>

        <div
          styleName={classNames('content', {
            content_visible: expand
          })}
        >
          <FieldSet title='Background'>
            <div styleName='field field_flex'>
              <div styleName='size-1-2'>
                <div styleName='label'>Color</div>
                <Input
                  type='text'
                  name='backgroundColor'
                  value={this.props.backgroundColor}
                  onChange={this.handleChange}
                />
              </div>
              <div styleName='size-1-2'>
                <Input
                  type='color'
                  name='backgroundColor'
                  value={this.props.backgroundColor}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div styleName='field'>
              <div styleName='label'>Image</div>
              <Input
                name='backgroundImage'
                value={this.props.backgroundImage}
                onChange={this.handleChange}
              />
            </div>
            <div styleName='field field_flex'>
              <div styleName='size-1-2'>
                <div styleName='label'>Size</div>
                <Input
                  name='backgroundSize'
                  type='select'
                  items={['auto', 'cover', 'contain']}
                  value={this.props.backgroundSize}
                  onChange={this.handleChange}
                />
              </div>
              <div styleName='size-1-2'>
                <div styleName='label'>Repeat</div>
                <Input
                  name='backgroundRepeat'
                  type='select'
                  items={['repeat', 'repeat-x', 'repeat-y', 'no-repeat']}
                  value={this.props.backgroundRepeat}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div styleName='field field_flex'>
              <div styleName='size-1-2'>
                <div styleName='label'>Position</div>
                <Input
                  name='backgroundPositionX'
                  type='select'
                  items={[
                    {
                      'value': '0%',
                      'label': 'left',
                    },
                    {
                      'value': '100%',
                      'label': 'right',
                    },
                    {
                      'value': '50%',
                      'label': 'center',
                    }
                  ]}
                  value={this.props.backgroundPositionX}
                  onChange={this.handleChange}
                />
              </div>
              <div styleName='size-1-2'>
                <Input
                  name='backgroundPositionY'
                  type='select'
                  items={[
                    {
                      'value': '0%',
                      'label': 'top',
                    },
                    {
                      'value': '100%',
                      'label': 'bottom',
                    },
                    {
                      'value': '50%',
                      'label': 'center',
                    }
                  ]}
                  value={this.props.backgroundPositionY}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div styleName='field field_flex'>
              <div styleName='size-1-2'>
                <div styleName='label'>Offset</div>
                <Input
                  name='backgroundOffsetX'
                  value={this.props.backgroundOffsetX}
                  onChange={this.handleChange}
                />
              </div>
              <div styleName='size-1-2'>
                <Input
                  name='backgroundOffsetY'
                  value={this.props.backgroundOffsetY}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </FieldSet>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderControlPanel()}
      </div>
    );
  }
}
