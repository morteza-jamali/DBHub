import {
  IStackStyles,
  DefaultPalette,
  IIconStyles,
  IButtonStyles,
} from '@fluentui/react';
import { NeutralColors } from '@fluentui/theme';

export const COMMAND_BAR: IStackStyles = {
  root: {
    paddingRight: 0,
    paddingLeft: 0,
    backgroundColor: 'transparent',
    height: '30px',
    '-webkit-app-region': 'drag',
  },
};

export const COMMAND_BUTTON: IButtonStyles = {
  root: {
    backgroundColor: 'transparent',
    '-webkit-app-region': 'no-drag',
  },
  menuIcon: {
    display: 'none !important',
  },
  rootHovered: {
    backgroundColor: NeutralColors.gray50,
    color: DefaultPalette.black,
  },
  rootPressed: {
    backgroundColor: NeutralColors.gray50,
    color: DefaultPalette.black,
  },
};

export const ICON: IIconStyles = {
  root: {
    fontSize: '10px',
    color: DefaultPalette.black,
  },
};

export const CLOSE_BUTTON: IButtonStyles = {
  root: {
    backgroundColor: 'transparent',
    '-webkit-app-region': 'no-drag',
  },
  rootHovered: {
    backgroundColor: DefaultPalette.red,
    color: `${DefaultPalette.white} !important`,
  },
  rootPressed: {
    backgroundColor: DefaultPalette.red,
    color: `${DefaultPalette.white} !important`,
  },
};
