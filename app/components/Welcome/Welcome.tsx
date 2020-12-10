import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';

export default function Welcome(): JSX.Element {
  return (
    <>
      <p>Welcome Page</p>
      <Link to={routes.HOME}>to Home</Link>
    </>
  );
}
