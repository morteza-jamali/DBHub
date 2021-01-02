import { NowRequest, NowResponse } from '@vercel/node';
import { Validator } from '../validator';
import { getDatabasePath, isNull } from '../api';
import { ERROR, response } from '../response';
import { Database, IDatabase } from '../database';

export default async function (...params: any): Promise<any> {
  let _request: NowRequest = params[0][0];
  let _response: NowResponse = params[0][1];
  const body: any = _request.body;
  const token: string | undefined = _request.headers.authorization;
  let database: IDatabase = new Database();
  let data: any;

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

  try {
    data = database.database.exec(body.query);
  } catch (error) {
    response(_response, { message: error.message }, ERROR);

    return;
  }

  response(_response, { message: 'Requested successfully !', data });
}
