import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TitleBar from '../TitleBar/TitleBar';
import { Stack } from '@fluentui/react';
import { STACK, BODY_STACK } from './Home.style';
import routes from '../../constants/routes.json';
import StarterBody from '../Starter/Starter';
import Body from '../Body/Body';

export default function Home(): JSX.Element {
  return (
    <Stack styles={STACK}>
      <TitleBar />
      <Stack styles={BODY_STACK}>
        <Switch>
          <Route exact path={routes.HOME} component={StarterBody} />
          <Route path={`${routes.HOME}/:bodyComponent`} component={Body} />
        </Switch>
      </Stack>
    </Stack>
  );
}
