import { NeutralColors, FontSizes } from '@fluentui/theme';
import { INavStyles, IIconStyles } from '@fluentui/react';

export const SIDENAV: Partial<INavStyles> = {
  root: {
    backgroundColor: NeutralColors.gray40,
    height: '100%',
  },
};

export const ICON: IIconStyles = {
  root: {
    fontSize: FontSizes.xxLarge,
  },
};
