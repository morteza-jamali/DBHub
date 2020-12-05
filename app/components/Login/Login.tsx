import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '@fluentui/react';
import routes from '../../constants/routes.json';
import styles from './Login.sass';

export default function Login(): JSX.Element {
  return (
    <div>
      <h2>Changed </h2>
      <PrimaryButton text="Primary" />
      <Link to={routes.COUNTER}>to Counter</Link>
    </div>
  );
}
