import React from 'react';
import { useParams } from 'react-router-dom';
import Repository from '../Repository/Repository';
import { upperCaseFirstLetter } from '../../modules/Strings';

const BODY_COMPONENTS: any = {
  Repository,
};

function _Body(): JSX.Element {
  let params: any = useParams();

  return React.createElement(
    BODY_COMPONENTS[upperCaseFirstLetter(params.bodyComponent)]
  );
}

export default function Body(): JSX.Element {
  return <_Body />;
}
