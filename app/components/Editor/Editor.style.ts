import { IStackStyles } from '@fluentui/react';
import { ITheme } from 'xterm';

export const SPLITTER: IStackStyles = {
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: '#1e1e1e',
  },
};

export const SPLITTER_GUTTER: React.CSSProperties = {
  height: '1px',
  borderTop: '4px solid #1e1e1e',
  backgroundColor: '#4d4d4d',
};

export const CONTAINER: IStackStyles = {
  root: {
    width: '100%',
    height: '100%',
    '.sideNav .ms-FocusZone': {
      height: '100%',
    },
  },
};

export const EDITOR: React.CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundColor: '#1e1e1e',
};

export const TERMINAL: ITheme = {
  background: '#1e1e1e',
};
