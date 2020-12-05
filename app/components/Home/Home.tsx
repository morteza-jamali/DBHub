import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import styles from './Home.sass';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Changed </h2>
      <Link to={routes.COUNTER}>to Counter</Link>
    </div>
  );
}
