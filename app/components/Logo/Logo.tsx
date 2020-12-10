import path from 'path';
import React from 'react';
import { Image, ProgressIndicator } from '@fluentui/react';
import { LOGO, PROGRESS_INDICATOR } from './Logo.style';

export default function Logo(): JSX.Element {
  return (
    <>
      <Image
        src={path.resolve(__dirname, '../resources/icon.svg')}
        styles={LOGO}
      ></Image>
      <ProgressIndicator
        styles={PROGRESS_INDICATOR}
        label="Searching for Databases"
      />
    </>
  );
}
