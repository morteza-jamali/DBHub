import React from 'react';
import { Stack, DefaultButton, IIconProps } from '@fluentui/react';
import { LOGIN_PAGE, LOGIN_STACK } from './Login.style';

const github_icon: IIconProps = { iconName: 'Volume0' };

export default function Login(): JSX.Element {
  return (
    <Stack styles={LOGIN_PAGE} verticalAlign="center" horizontalAlign="center">
      <Stack
        styles={LOGIN_STACK}
        verticalAlign="center"
        horizontalAlign="center"
      >
        <h4>Sign In</h4>
        <DefaultButton toggle text="GitHub" iconProps={github_icon} />
      </Stack>
    </Stack>
  );
}
