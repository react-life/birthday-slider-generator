import React from 'react';

export default function (story, props) {
  const wrappedComponent = story.props.children;

  const wrappedComponentWithProps = React.cloneElement(wrappedComponent, props);
  const storyWithProps = React.cloneElement(story, undefined, wrappedComponentWithProps);

  return storyWithProps;
}
