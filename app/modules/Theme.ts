import { loadTheme } from '@fluentui/react';
import Palette from '../themes/defaultDark.json';

class _Theme {
  palette: any;

  constructor() {
    loadTheme({
      palette: Palette,
    });
  }
}

export default function Theme(): _Theme {
  return new _Theme();
}
