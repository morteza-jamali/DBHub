import { NowRequest, NowResponse } from '@vercel/node';
import { Validator } from '../src/validator';
import { response, ERROR } from '../src/response';

export default (request: NowRequest, _response: NowResponse) => {
  const body: any = request.body;
  let token: string;

  let isValid: boolean = new Validator(_response, body).validate({
    push: 'depend:token|required',
    query: 'required',
    username: 'required',
  });

  if (!isValid) {
    return;
  }

  /*if (body.push) {
    if (isNull(body.token)) {
      return response(_response, { message: 'Token is required' }, ERROR);
    }

    token = body.token;
  }

  if (isNull(body.query)) {
    return response(_response, { message: 'SQL query is undefined' }, ERROR);
  }

  if (isNull(body.username)) {
    return response(_response, { message: 'Username is undefined' }, ERROR);
  }*/

  response(_response, { message: 'Requested successfully !' });
};
