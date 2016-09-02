import React, { Component, PropTypes } from 'react';
import R from 'ramda';
import classNames from 'classnames';
import pureRender from 'pure-render-decorator';
import cssModules from 'helpers/cssModules';

import Button from 'components/Button';
import Text from 'components/Text';
import Tooltip from 'components/Tooltip';

import styles from './Progress.sss';

@pureRender
@cssModules(styles)
export default class Progress extends Component {
  static propTypes = {
    title: PropTypes.string,
    progress: PropTypes.array,
  };

  static defaultProps = {
    title: 'Рацион',
    progress: [],
  };

  state = {
    tooltip: false,
  }

  handleMouseOver = () => {
    this.setState({ tooltip: true });
  }

  handleMouseOut = () => {
    this.setState({ tooltip: false });
  }

  renderInfo(info, low) {
    const title = low ? 'Недостаточно информации для расчета рациона' :
    'Внесите все данные для создания максимально точного рациона';
    const row = item => (
      <li
        styleName={classNames('row', {
          row_state_active: item.active,
        })}
      >
        <Text color='inherit'>{item.text}</Text>
      </li>
    );

    return (
      <div styleName='info'>
        <div
          styleName={classNames('title', {
            title_state_low: low,
          })}
        >
          <Text color='inherit'>{title}</Text>
        </div>
        <ul styleName='list'>
          {info.map(row)}
        </ul>
      </div>
    );
  }

  renderBar({ barCharge, barLength, lowCharged }) {
    const renderItem = index => (
      <div
        styleName={classNames('item', {
          item_state_charged: index < barCharge,
        })}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      />
    );

    return (
      <div
        styleName={classNames('bar', {
          bar_charge_low: lowCharged,
          bar_charge_high: !lowCharged,
        })}
      >
        {R.times(renderItem, barLength)}
      </div>
    );
  }

  render() {
    const { progress } = this.props;
    const bar = {
      barLength: progress.length,
      barCharge: progress.filter(item => item.active).length,
      lowCharged: progress.some(item => !item.active && item.required),
    };

    return (
      <div styleName='progress'>
        <Button
          small
          disabled={bar.lowCharged}
          theme='progress'
        >
          Автосоздание
        </Button>
        {this.renderBar(bar)}
        <Tooltip
          visible={this.state.tooltip}
          progress
        >
          {this.renderInfo(progress, bar.lowCharged)}
        </Tooltip>
      </div>
    );
  }
}
