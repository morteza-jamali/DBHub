import React from 'react';
import { useHistory } from 'react-router-dom';
import { _window, _app, openURL } from '../../modules/Main';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react';
import {
  COMMAND_BAR,
  ICON,
  COMMAND_BUTTON,
  CLOSE_BUTTON,
  APP_ICON,
} from './TitleBar.style';
import routes from '../../constants/routes.json';
import packageJSON from '../../../package.json';

const _farItems: ICommandBarItemProps[] = [
  {
    key: 'minimize',
    iconOnly: true,
    iconProps: { iconName: 'ChromeMinimize', styles: ICON },
    buttonStyles: COMMAND_BUTTON,
    onClick: () => {
      _window().minimize();
    },
  },
  {
    key: 'maximize',
    iconOnly: true,
    iconProps: { iconName: 'ArrangeBringForward', styles: ICON },
    buttonStyles: COMMAND_BUTTON,
    onClick: () => {
      if (_window().isMaximized()) {
        _window().restore();
      } else {
        _window().maximize();
      }
    },
  },
  {
    key: 'close',
    iconOnly: true,
    iconProps: { iconName: 'ChromeClose', styles: ICON },
    buttonStyles: CLOSE_BUTTON,
    onClick: () => {
      _app().exit();
    },
  },
];

export default function TitleBar(): JSX.Element {
  let history = useHistory();

  const _items: ICommandBarItemProps[] = [
    {
      key: 'appIcon',
      cacheKey: 'appIconCacheKey',
      buttonStyles: APP_ICON,
    },
    {
      key: 'fileItem',
      text: 'File',
      cacheKey: 'fileItemCacheKey',
      buttonStyles: COMMAND_BUTTON,
      subMenuProps: {
        items: [
          {
            key: 'newRepository',
            text: 'New Repository',
            onClick: () => {
              history.push(`${routes.HOME}${routes.REPOSITORY}`);
            },
          },
          {
            key: 'newDatabase',
            text: 'New Database',
          },
          {
            key: 'newTable',
            text: 'New Table',
          },
          {
            key: 'editor',
            text: 'Editor',
            onClick: () => {
              history.push(`${routes.HOME}${routes.EDITOR}`);
            },
          },
        ],
      },
    },
    {
      key: 'editItem',
      text: 'Edit',
      cacheKey: 'editItemCacheKey',
      buttonStyles: COMMAND_BUTTON,
    },
    {
      key: 'helpItem',
      text: 'Help',
      cacheKey: 'helpItemCacheKey',
      buttonStyles: COMMAND_BUTTON,
      subMenuProps: {
        items: [
          {
            key: 'welcome',
            text: 'Welcome',
            onClick: () => {
              history.push(routes.WELCOME);
            },
          },
          {
            key: 'documentation',
            text: 'Documentation',
          },
          {
            key: 'releaseNotes',
            text: 'Release Notes',
          },
          {
            key: 'keyboardShortcuts',
            text: 'Keyboard Shortcuts Reference',
          },
          {
            key: 'reportIssue',
            text: 'Report Issue',
          },
          {
            key: 'viewLicense',
            text: 'View License',
            onClick: () => {
              openURL(`${packageJSON.repository.url}/blob/master/LICENSE`);
            },
          },
          {
            key: 'developerTools',
            text: 'Toggle Developer Tools',
            onClick: () => {
              _window().toggleDevTools();
            },
          },
          {
            key: 'checkForUpdate',
            text: 'Check for Update',
          },
          {
            key: 'about',
            text: 'About',
          },
        ],
      },
    },
  ];

  return (
    <CommandBar items={_items} farItems={_farItems} styles={COMMAND_BAR} />
  );
}
