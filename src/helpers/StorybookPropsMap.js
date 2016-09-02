import React, { Component, PropTypes } from 'react';

import addPropsToStory from 'helpers/addPropsToStory';

class PropsMap extends Component {
  static propTypes = {
    children: PropTypes.element,
    map: PropTypes.object,
  };

  state = {

  };

  componentWillMount() {
    const story = this.props.children;
    const wrappedComponent = story.props.children;

    const { children, ...rest } = wrappedComponent.props; // eslint-disable-line no-unused-vars

    this.setState(rest);
  }

  getHandlers() {
    const { map } = this.props;

    const handlers = Object.keys(map).reduce((acc, key) => {
      const callback = (value) => {
        const property = map[key];

        if (typeof property === 'string') {
          this.setState({
            [map[key]]: value,
          });

          return;
        }

        this.setState(property(value, this.state));
      };

      Object.defineProperty(callback, 'name', {
        value: key,
      });

      return {
        ...acc,
        [key]: callback,
      };
    }, {});

    return handlers;
  }

  render() {
    return addPropsToStory(this.props.children, {
      ...this.state,
      ...this.getHandlers(),
    });
  }
}

export default {
  addMap(map) {
    this.addDecorator(story => (
      <PropsMap map={map}>
        {story()}
      </PropsMap>
    ));
  },
};
