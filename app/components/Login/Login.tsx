import React from 'react';
import { Stack } from '@fluentui/react';
import { styles, classes } from './Login.style';
import routes from '../../constants/routes.json';

export default function Login(): JSX.Element {
  return (
    <Stack
      className={classes.firstStack}
      verticalAlign="center"
      horizontalAlign="center"
    >
      <Stack styles={styles} className={classes.loginStack}>
        <span>Please sign in to your account</span>
      </Stack>
    </Stack>
  );
}
