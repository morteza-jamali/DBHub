import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
//import Github from '../../github/Github';

export default function Welcome(): JSX.Element {
  //const github = new Github();

  //github.getUserVerificationData();

  return (
    <>
      <p>Welcome Page</p>
      <Link to={routes.LOGIN}>to Counter</Link>
    </>
  );
}
