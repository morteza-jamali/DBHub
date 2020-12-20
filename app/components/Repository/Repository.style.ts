import React from 'react';
import { NeutralColors } from '@fluentui/theme';
import {
  IStackItemStyles,
  ITextFieldStyles,
  IButtonStyles,
  ISeparatorStyles,
  IStackStyles,
} from '@fluentui/react';

export const STACK: IStackStyles = {
  root: {
    width: '100%',
    paddingTop: '20px',
  },
};

export const CONTAINER: IStackStyles = {
  root: {
    width: '100%',
    height: '100%',
    padding: '30px',
  },
};

export const STACK_ITEM: IStackItemStyles = {
  root: {},
};

export const RIGHT_STACK_ITEM: IStackItemStyles = {
  root: [
    STACK_ITEM.root,
    {
      paddingLeft: '30px',
    },
  ],
};

export const TEXT_INPUT: Partial<ITextFieldStyles> = {
  fieldGroup: {
    marginBottom: '10px',
  },
};

export const BUTTON: IButtonStyles = {
  root: {
    float: 'right',
  },
};

export const FORM_DETAILS: React.CSSProperties = {
  backgroundColor: NeutralColors.gray30,
  paddingTop: '20px',
  paddingBottom: '20px',
};

export const LIST_UL: React.CSSProperties = {
  margin: '0',
};

export const SEPARATOR: Partial<ISeparatorStyles> = {
  root: {
    '&::before': {
      background: NeutralColors.gray50,
    },
  },
};
