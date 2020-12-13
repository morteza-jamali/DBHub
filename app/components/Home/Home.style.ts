import { IStackStyles } from '@fluentui/react';
import { NeutralColors } from '@fluentui/theme';

export const STACK: IStackStyles = {
  root: {
    width: '100%',
    height: '100%',
    '.sideNav .ms-FocusZone': {
      height: '100%',
    },
  },
};

export const BODY_STACK: IStackStyles = {
  root: [
    STACK.root,
    {
      backgroundColor: NeutralColors.gray10,
    },
  ],
};
