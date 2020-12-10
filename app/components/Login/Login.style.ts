import { DefaultEffects, DefaultPalette } from '@fluentui/react';
import { IStackStyles } from 'office-ui-fabric-react/lib/Stack';

export const LOGIN_PAGE: IStackStyles = {
  root: {
    width: '100%',
    height: '100%',
    color: DefaultPalette.black,
  },
};

export const LOGIN_STACK: IStackStyles = {
  root: {
    width: '50%',
    height: '70%',
    boxShadow: DefaultEffects.elevation16,
    backgroundColor: DefaultPalette.white,
  },
};

export const BUTTONS: IStackStyles = {
  root: {
    direction: 'rtl'
  }
};
