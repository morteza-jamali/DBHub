import React from 'react';
import { Image, ProgressIndicator } from '@fluentui/react';
import { LOGO, PROGRESS_INDICATOR } from './Logo.style';
import { getAssetPath } from '../../modules/Main';

export default function Logo(): JSX.Element {
  return (
    <>
      <Image src={getAssetPath('icon.svg')} styles={LOGO} />
      <ProgressIndicator
        styles={PROGRESS_INDICATOR}
        label="Searching for Databases"
      />
    </>
  );
}
