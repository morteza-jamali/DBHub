import { DefaultEffects, DefaultPalette } from '@fluentui/react';
import { IStackItemStyles } from 'office-ui-fabric-react/lib/Stack';

export const styles: IStackItemStyles = {
  root: {
    width: '50%',
    height: '70%',
    boxShadow: DefaultEffects.elevation16,
    backgroundColor: DefaultPalette.white,
  },
};

export const classes: any = {
  firstStack: 'w-100 h-100 ms-fontColor-black',
};
