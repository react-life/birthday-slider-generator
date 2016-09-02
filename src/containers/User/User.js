import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';

import Section from 'components/Section';
import UserHeader from 'containers/UserHeader';

const menuItems = [
  {
    to: '/user/institution',
    children: 'Учреждение',
  },
  {
    to: '/user/staff',
    children: 'Персонал',
  },
  {
    to: '/user/roles',
    children: 'Роли и права',
  },
  {
    to: '/user/devices',
    children: 'Устройства',
  },
  {
    to: '/user/journal',
    children: 'Журнал приемов',
  },
  {
    to: '/user/profile',
    children: 'Профиль',
  },
];


@pureRender
export default class UserContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
  };

  render() {
    return (
      <Section
        menu={menuItems}
        header={UserHeader}
        location={this.props.location}
      >
        {this.props.children}
      </Section>
    );
  }
}
