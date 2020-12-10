import React from 'react';
import { Stack, DefaultButton } from '@fluentui/react';
import { ipcRenderer } from 'electron';
import { LOGIN_PAGE, LOGIN_STACK, BUTTONS } from './Login.style';

function githubAuth() {
  ipcRenderer.send('githubAuthenticate', '');
}

export default function Login(): JSX.Element {
  return (
    <Stack styles={LOGIN_PAGE} verticalAlign="center" horizontalAlign="center">
      <Stack
        styles={LOGIN_STACK}
        verticalAlign="center"
        horizontalAlign="center"
      >
        <h4>Sign In</h4>
        <DefaultButton text="GitHub" styles={BUTTONS} onClick={githubAuth}>
          <i className="mi mi-github mr-2"></i>
        </DefaultButton>
      </Stack>
    </Stack>
  );
}
