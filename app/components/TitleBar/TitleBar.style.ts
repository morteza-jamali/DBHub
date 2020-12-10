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
  },
};

export const COMMAND_BUTTON: IButtonStyles = {
  root: {
    backgroundColor: 'transparent',
    color: DefaultPalette.white,
  },
  menuIcon: {
    display: 'none !important',
  },
  rootHovered: {
    backgroundColor: NeutralColors.gray140,
    color: DefaultPalette.white,
  },
  rootPressed: {
    backgroundColor: NeutralColors.gray140,
    color: DefaultPalette.white,
  },
  iconHovered: {
    color: DefaultPalette.white,
  },
  iconPressed: {
    color: DefaultPalette.white,
  },
};

export const ICON: IIconStyles = {
  root: {
    fontSize: '10px',
    color: DefaultPalette.white,
  },
};
