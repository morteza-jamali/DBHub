import React from 'react';
import { Stack, DefaultButton } from '@fluentui/react';
import { STACK } from './Starter.style';

function Starter(): JSX.Element {
  return (
    <Stack styles={STACK} horizontal>
      <DefaultButton text="Create Database Repository" />
      <DefaultButton text="Create Database Repository" />
      <DefaultButton text="Create Database Repository" />
    </Stack>
  );
}

export default function StarterBody(): JSX.Element {
  return <Starter />;
}
