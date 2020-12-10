import { remote } from 'electron';
import React from 'react';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react';
import { COMMAND_BAR, ICON, COMMAND_BUTTON } from './TitleBar.style';

const _items: ICommandBarItemProps[] = [
  {
    key: 'fileItem',
    text: 'File',
    cacheKey: 'fileItemCacheKey',
    buttonStyles: COMMAND_BUTTON,
    subMenuProps: {
      items: [
        {
          key: 'newDatabase',
          text: 'New Database',
        },
        {
          key: 'newTable',
          text: 'New Table',
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
  },
];

const _farItems: ICommandBarItemProps[] = [
  {
    key: 'minimize',
    iconOnly: true,
    iconProps: { iconName: 'ChromeMinimize', styles: ICON },
    buttonStyles: COMMAND_BUTTON,
    onClick: () => {
      remote.BrowserWindow.getFocusedWindow()?.minimize();
    },
  },
  {
    key: 'maximize',
    iconOnly: true,
    iconProps: { iconName: 'ArrangeBringForward', styles: ICON },
    buttonStyles: COMMAND_BUTTON,
    onClick: () => {
      remote.BrowserWindow.getFocusedWindow()?.maximize();
    },
  },
  {
    key: 'close',
    iconOnly: true,
    iconProps: { iconName: 'ChromeClose', styles: ICON },
    buttonStyles: COMMAND_BUTTON,
    onClick: () => {
      remote.app.exit();
    },
  },
];

export default function TitleBar(): JSX.Element {
  return (
    <CommandBar items={_items} farItems={_farItems} styles={COMMAND_BAR} />
  );
}
