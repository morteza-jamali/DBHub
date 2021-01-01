import { NowRequest, NowResponse } from '@vercel/node';
import { Validator } from '../src/validator';
import { getDatabasePath, isNull } from '../src/api';
import { response } from '../src/response';
import { Database, IDatabase } from '../src/database';

export default async (request: NowRequest, _response: NowResponse) => {
  const body: any = request.body;
  const token: string | undefined = request.headers.authorization;
  let database: IDatabase = new Database();

  !isNull(body, true)
    ? isNull(token)
      ? (body.token = undefined)
      : (body.token = token)
    : undefined;

  let isValid: boolean = new Validator(_response, body).validate({
    push: 'depend:token',
    query: 'required',
    username: 'required',
    repository: 'required',
    database: 'required',
  });

  if (!isValid) {
    return;
  }

  await database.init(
    getDatabasePath(body.username, body.repository, body.database)
  );

  response(_response, { message: 'Requested successfully !' });
};
