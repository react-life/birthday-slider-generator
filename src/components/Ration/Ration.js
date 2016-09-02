import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import cssModules from 'helpers/cssModules';

import Button from 'components/Button';
import Text from 'components/Text';
import Progress from './Progress';

import styles from './Ration.sss';

@pureRender
@cssModules(styles)
export default class Ration extends Component {
  static propTypes = {
    title: PropTypes.string,
    progress: PropTypes.array,
  };

  static defaultProps = {
    title: 'Рацион',
    progress: [],
  };

  renderControls() {
    const { progress } = this.props;
    return (
      <div styleName='controls'>
        <div styleName='row'>
          <Progress progress={progress} />
        </div>
        <div styleName='row'>
          <Button block small>
            Создать вручную
          </Button>
        </div>
        <div styleName='row'>
          <Button block small>
            Загрузить шаблон
          </Button>
        </div>
      </div>
    );
  }

  render() {
    const { title } = this.props;

    return (
      <div styleName='ration'>
        <div styleName='row'>
          <Text bold theme='upper'>
            {title}
          </Text>
          <Button small bordered>
            Текущий
          </Button>
        </div>
        {this.renderControls()}
      </div>
    );
  }
}
