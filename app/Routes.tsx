/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { initializeIcons } from '@uifabric/icons';
import { ipcRenderer } from 'electron';
import { MainFunctions } from './modules/Main';
//import './modules/_Bootstrap';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import WelcomePage from './containers/WelcomePage';
import LogoPage from './containers/LogoPage';

initializeIcons();

export default function Routes() {
  let history = useHistory();
  ipcRenderer.on('changeRoute', (event: any, arg: any) => {
    MainFunctions.changeRoute(history, arg);
  });

  return (
    <App>
      <Switch>
        <Route path={routes.HOME} component={HomePage} />
        <Route path={routes.LOGIN} component={LoginPage} />
        <Route path={routes.WELCOME} component={WelcomePage} />
        <Route path={routes.LOGO} component={LogoPage} />
      </Switch>
    </App>
  );
}
