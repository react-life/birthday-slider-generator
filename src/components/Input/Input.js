import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import cssModules from 'helpers/cssModules';

import styles from './Input.sss';

@pureRender
@cssModules(styles)
export default class Input extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    valueIndex: PropTypes.number,
    items: PropTypes.array,
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf([
      'left',
      'top',
      'right',
      'bottom'
    ]),
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    labelPosition: 'top',
    items: [],
    type: 'text',
    onChange: () => {},
  }

  handleChange = event => {
    const { target } = event;
    const value = this.props.type === 'checkbox' ? target.checked : target.value;
    this.props.onChange(target.name || null, value);
  }

  renderOption(item, i) {
    const value = item.value || item;
    const label = item.label || item; 
    return (
      <option key={i} value={value}>
        {label}
      </option>
    );
  }

  renderSelect() {
    const { name, value, items, valueIndex, disabled } = this.props;
    let selected = isFinite(valueIndex) && items[valueIndex];
    if (value) {
      selected = value.value || value;
    }

    return (
      <select
        name={name}
        styleName='select'
        onChange={this.handleChange}
        value={selected}
        disabled={disabled}
      >
        {items.map(this.renderOption, this)}
      </select>
    );
  }

  renderCheckbox() {
    const { name, value, disabled, type } = this.props;

    return (
      <input
        styleName='checkbox'
        type={type}
        value={value}
        name={name}
        onChange={this.handleChange}
        disabled={disabled}
      />
    );
  }

  renderField() {
    const { type, name, value, disabled } = this.props;
    switch(type) {
      case 'select':
        return this.renderSelect();

      case 'checkbox':
        return this.renderCheckbox();
    }

    return (
      <input
        styleName='text'
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        onChange={this.handleChange}
      />
    )
  }

  render() {
    const { type, label, value, labelPosition, disabled } = this.props;

    return (
      <label
        styleName={classNames('input', {
          [`input_label_${labelPosition}`]: labelPosition,
          input_disabled: disabled,
          input_checkbox: type === 'checkbox',
          input_checkbox_checked: type === 'checkbox' && value
        })}
      >
        {this.renderField()}
        <span styleName='label'>{label}</span>
      </label>
    );
  }
}
