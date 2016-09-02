import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import R from 'ramda';

import UserHeader from 'components/UserHeader';

@pureRender
export default class UserHeaderContainer extends Component {
  static propTypes = {
    menu: PropTypes.array,
    location: PropTypes.object,
  };

  static defaultProps = {
    menu: [],
    location: {},
  };

  render() {
    const { menu, location } = this.props;
    const getTitle = R.compose(
      R.propOr('', 'children'),
      R.find(R.propEq('to', location.pathname))
    );

    return (
      <UserHeader
        title={getTitle(menu)}
      />
    );
  }
}
