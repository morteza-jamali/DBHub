import {
  IStackStyles,
  DefaultPalette,
  IIconStyles,
  IButtonStyles,
} from '@fluentui/react';
import { NeutralColors, FontSizes } from '@fluentui/theme';

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
  iconHovered: {
    color: DefaultPalette.black,
  },
  iconPressed: {
    color: DefaultPalette.black,
  },
};

export const ICON: IIconStyles = {
  root: {
    fontSize: FontSizes.size10,
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
