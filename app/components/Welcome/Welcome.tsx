import React from 'react';
import Github from '../../github/Github';

export default function Welcome(): JSX.Element {
  const github = new Github();

  github.exec('gh fsdf', (error: any, stdout: any, stderr: any) => {
    console.error(error.code);
    console.warn(stdout);
    console.warn(stderr);
  });

  return <p>Welcome Page</p>;
}
