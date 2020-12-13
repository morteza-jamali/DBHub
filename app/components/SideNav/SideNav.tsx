import React from 'react';
import { Nav, INavLinkGroup } from '@fluentui/react';
import { SIDENAV, ICON } from './SideNav.style';

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: '',
        url: 'http://example.com',
        key: 'database',
        iconProps: {
          iconName: 'Database',
          styles: ICON,
        },
      },
      {
        name: '',
        url: 'http://example.com',
        key: 'repository',
        iconProps: {
          iconName: 'Send',
          styles: ICON,
        },
      },
    ],
  },
];

function _SideNav(): JSX.Element {
  return <Nav selectedKey="database" styles={SIDENAV} groups={navLinkGroups} />;
}

export default function SideNav(): JSX.Element {
  return <_SideNav />;
}
