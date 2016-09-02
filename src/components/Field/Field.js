import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import cssModules from 'helpers/cssModules';
import classNames from 'classnames';

import styles from './Field.sss';

@pureRender
@cssModules(styles)
export default class Field extends Component {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    text: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    center: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    placeholder: PropTypes.string,
    note: PropTypes.string,
    type: PropTypes.string,
    theme: PropTypes.string,
    message: PropTypes.bool,
  }

  static defaultProps = {
    name: 'fieldNameDefault',
    error: false,
    note: '',
    type: 'text',
    onChange: () => {},
  }

  handleChange = (event) => {
    this.props.onChange(event.target.value);
  }


  render() {
    const {
      id,
      label,
      value,
      placeholder,
      required,
      error,
      note,
      center,
      theme,
      message,
      ...rest,
    } = this.props;
    return (
      <div
        styleName={classNames({
          field: true,
          field_state_error: error,
          field_state_errorText: error.length,
          field_state_note: note,
          field_state_isText: value,
          field_type_placeholder: placeholder,
          field_type_center: center,
          [`field_theme_${theme}`]: theme,
          field_state_message: message,
        })}
      >
        <input
          styleName='input'
          id={id}
          placeholder={placeholder}
          value={value}
          {...rest}
          onChange={this.handleChange}
        />
        <div styleName='border' />
        {label && <label styleName='label' htmlFor={id}>
          {label}
          {required && <span styleName='required'>*</span>}
        </label>}
        {note && <label htmlFor={id} styleName='note'>{note}</label>}
        {error.length &&
          <label
            htmlFor={id}
            styleName={classNames({
              note: true,
              note_type_error: true,
            })}
          >
            {error}
          </label>}
      </div>
    );
  }
}
