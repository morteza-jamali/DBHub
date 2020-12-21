import { Nav, INavLinkGroup, Stack } from '@fluentui/react';
import { SIDENAV, ICON, STACK } from './SideNav.style';

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
  return (
    <Stack styles={STACK} horizontal>
      <Stack.Item>
        <Nav selectedKey="database" styles={SIDENAV} groups={navLinkGroups} />
      </Stack.Item>
      <Stack.Item>
        <div className="sideNav-extend">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam impedit
          totam laudantium nisi ad. Laboriosam praesentium quam in, quod nam
          autem iusto quia, a vero debitis ullam, eaque consequatur sit.
        </div>
      </Stack.Item>
    </Stack>
  );
}

export default function SideNav(): JSX.Element {
  return <_SideNav />;
}
