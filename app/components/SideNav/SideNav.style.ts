import { FontSizes } from '@fluentui/theme';
import {
  INavStyles,
  IIconStyles,
  IStackStyles,
  getTheme,
} from '@fluentui/react';

const theme: any = getTheme();

export const STACK: IStackStyles = {
  root: {
    maxWidth: '250px',
    height: '100%',
    backgroundColor: 'rgb(37, 37, 38)',
    color: theme.palette.neutralLighter,
  },
};

export const SIDENAV: Partial<INavStyles> = {
  root: {
    backgroundColor: theme.palette.themeDark,
    height: '100%',
  },
  link: {
    padding: '15px 10px 15px 15px',
    height: 'auto',
    backgroundColor: 'transparent',
    borderRadius: '0',
    '&::after': {
      borderLeft: '3px solid transparent',
    },
  },
  compositeLink: {
    '&:hover a': {
      backgroundColor: 'transparent !important',
    },
  },
};

export const ICON: IIconStyles = {
  root: {
    fontSize: FontSizes.xxLarge,
    margin: 'auto',
    color: theme.palette.neutralLighter,
  },
};
