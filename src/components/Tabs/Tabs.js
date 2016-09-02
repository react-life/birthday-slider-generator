import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import invariant from 'invariant';
import cssModules from 'helpers/cssModules';

import styles from './Tabs.sss';

@pureRender
@cssModules(styles)
export default class Tabs extends Component {
  static propTypes = {
    labels: PropTypes.array.isRequired,
    defaultSelected: PropTypes.number,
    selected: PropTypes.number,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element,
    ]).isRequired,
  }

  static defaultProps = {
    defaultSelected: 0,
  }

  state = {
    selected: this.props.defaultSelected,
  }

  componentWillMount() {
    const { selected, onChange } = this.props;
    invariant(
      !isFinite(selected) || onChange,
      'You must set prop onChange when prop selected is setup'
    );
  }

  handleClick = index => event => {
    event.preventDefault();
    this.setState({
      selected: index,
    });
    if (this.props.onChange) {
      this.props.onChange(index);
    }
  }

  renderLabel(child, index) {
    const { selected } = this.state;
    const { selected: propsSelected } = this.props;
    const selectedLabel = isFinite(propsSelected) ? propsSelected : selected;

    return (
      <li key={index}>
        <button
          type='button'
          styleName={classNames('label', {
            label_active: selectedLabel === index,
          })}
          onClick={this.handleClick(index)}
        >
          {this.props.labels[index]}
        </button>
      </li>
    );
  }

  renderTitles() {
    return (
      <ul styleName='labels'>
        {React.Children.map(this.props.children, this.renderLabel, this)}
      </ul>
    );
  }

  renderContent(selected) {
    return (
      <div styleName='content'>
        {this.props.children[selected]}
      </div>
    );
  }

  render() {
    const { selected } = this.state;
    const { selected: propsSelected } = this.props;
    const index = isFinite(propsSelected) ? propsSelected : selected;

    return (
      <div styleName='tabs'>
        {this.renderTitles()}
        {this.renderContent(index)}
      </div>
    );
  }
}
