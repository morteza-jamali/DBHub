import {
  IStackStyles,
  DefaultPalette,
  IIconStyles,
  IButtonStyles,
  getTheme,
} from '@fluentui/react';
import { FontSizes } from '@fluentui/theme';

const theme: any = getTheme();

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
    color: theme.palette.neutralLighter,
  },
  menuIcon: {
    display: 'none !important',
  },
  rootHovered: {
    backgroundColor: theme.palette.themeLight,
    color: theme.palette.neutralLighter,
  },
  rootPressed: {
    backgroundColor: theme.palette.themeLight,
    color: theme.palette.neutralLighter,
  },
  iconHovered: {
    color: theme.palette.neutralLighter,
  },
  iconPressed: {
    color: theme.palette.neutralLighter,
  },
};

export const ICON: IIconStyles = {
  root: {
    fontSize: FontSizes.size10,
    color: theme.palette.neutralLighter,
  },
};

export const CLOSE_BUTTON: IButtonStyles = {
  root: {
    backgroundColor: 'transparent',
    '-webkit-app-region': 'no-drag',
  },
  rootHovered: {
    backgroundColor: DefaultPalette.red,
  },
  rootPressed: {
    backgroundColor: DefaultPalette.red,
  },
  iconHovered: {
    color: DefaultPalette.white,
  },
  iconPressed: {
    color: DefaultPalette.white,
  },
};

export const APP_ICON: IButtonStyles = {
  root: {
    backgroundImage: 'url("../resources/icons/48x48.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '60%',
    backgroundPosition: 'center center',
    backgroundColor: 'transparent',
    '-webkit-app-region': 'no-drag',
  },
  rootHovered: {
    backgroundColor: 'transparent',
  },
  rootPressed: {
    backgroundColor: 'transparent',
  },
};
