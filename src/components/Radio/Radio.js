import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import cssModules from 'helpers/cssModules';
import styles from './Radio.sss';


@pureRender
@cssModules(styles)
export default class Radio extends Component {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]).isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    onChange: () => {},
  }

  handleChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render() {
    const { name, id, value, checked, children } = this.props;
    return (
      <div styleName='radio'>
        <input
          styleName='input'
          type='radio'
          name={name}
          id={id}
          value={value}
          checked={checked}
          onChange={this.handleChange}
        />
        <label styleName='label' htmlFor={id}>{children}</label>
      </div>
    );
  }
}
