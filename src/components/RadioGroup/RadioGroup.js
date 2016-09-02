import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import cssModules from 'helpers/cssModules';
import classNames from 'classnames';
import Radio from 'components/Radio';
import styles from './RadioGroup.sss';


@pureRender
@cssModules(styles)
export default class RadioGroup extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    theme: PropTypes.string,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
  }

  static defaultProps = {
    onChange: () => {},
  }

  renderRadio({ id, value, content }, i) {
    return (
      <div styleName='item' key={i}>
        <Radio
          id={id}
          name={this.props.name}
          value={value}
          checked={value === this.props.value}
          onChange={this.props.onChange}
        >{content}</Radio>
      </div>
    );
  }


  render() {
    const { items, theme } = this.props;
    return (
      <div
        styleName={classNames({
          radioGroup: true,
          [`radioGroup_theme_${theme}`]: theme,
        })}
      >
        {items.map(this.renderRadio, this)}
      </div>
    );
  }
}
