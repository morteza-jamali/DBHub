import {
  IImageStyles,
  IProgressIndicatorStyles,
  DefaultPalette,
} from '@fluentui/react';

export const LOGO: IImageStyles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    paddingBottom: '40px',
  },
  image: {
    width: '120px',
    margin: 'auto',
  },
};

export const PROGRESS_INDICATOR: IProgressIndicatorStyles = {
  root: {
    marginTop: '60px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  itemDescription: {},
  itemName: {
    color: DefaultPalette.white,
    textAlign: 'center',
    marginBottom: '10px',
  },
  itemProgress: {
    paddingBottom: '4px',
  },
  progressBar: {
    background:
      'linear-gradient(to right, rgba(51, 167, 255, 0.5) 0%, rgba(51, 167, 255, 1) 50%, rgba(51, 167, 255, 0.5) 100%);',
  },
  progressTrack: {
    backgroundColor: 'transparent',
  },
};
