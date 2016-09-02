import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import cssModules from 'helpers/cssModules';

import Text from 'components/Text';

import styles from './Checkbox.sss';

@pureRender
@cssModules(styles)
export default class Checkbox extends Component {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['medium', 'big']),
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.node,
  }

  static defaultProps = {
    name: 'checkboxName',
    checked: false,
    size: '',
    onChange: () => {},
  }

  handleChange = (event) => {
    this.props.onChange(event.target.checked);
  }

  render() {
    const { name, id, checked, children, size } = this.props;

    return (
      <div styleName='checkbox'>
        <input
          styleName='input'
          type='checkbox'
          name={name}
          id={id}
          checked={checked}
          onChange={this.handleChange}
        />
        <label styleName='label' htmlFor={id}>
          <div styleName='check' />
          {children && <div styleName='text'>
            <Text size={size} color='inherit'>{children}</Text>
          </div>}
        </label>
      </div>
    );
  }
}
