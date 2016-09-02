import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import cssModules from 'helpers/cssModules';
import classNames from 'classnames';

import styles from './FilePicker.sss';

@pureRender
@cssModules(styles)
export default class Checkbox extends Component {
  static propTypes = {
    url: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    title: PropTypes.string,
    fileTitle: PropTypes.string,
  }

  static defaultProps = {
    title: 'Аватар',
    fileTitle: 'Изменить аватар',
    url: '',
  }

  state = {
    url: '',
  }

  handleChange = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.onload = (event) => {
        this.setState({ url: event.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      this.setState({ url: '' });
    }
  }


  render() {
    const { id, title, fileTitle } = this.props;
    const url = this.state.url || this.props.url;

    return (
      <div
        styleName={classNames({
          filePicker: true,
          filePicker_type_url: url,
        })}
      >
        <input
          styleName='input'
          type='file'
          accept='image/*'
          id={id}
          onChange={this.handleChange}
        />

        <label htmlFor={id} styleName='label'>
          <div styleName='avatar'>
            {url && <img styleName='image' src={url} alt='presentation' />}
          </div>

          <div styleName='title'>
            {url && fileTitle ? fileTitle : title}
          </div>
        </label>
      </div>
    );
  }
}
