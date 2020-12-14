import { NeutralColors, FontSizes } from '@fluentui/theme';
import { INavStyles, IIconStyles } from '@fluentui/react';

export const SIDENAV: Partial<INavStyles> = {
  root: {
    backgroundColor: NeutralColors.gray40,
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
    color: NeutralColors.black,
  },
};
