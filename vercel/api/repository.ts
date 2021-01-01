import { NowRequest, NowResponse } from '@vercel/node';
import { Validator } from '../src/validator';
import { response } from '../src/response';
import { isNull } from '../src/api';

export default async (request: NowRequest, _response: NowResponse) => {
  const body: any = request.body;
  const token: string | undefined = request.headers.authorization;

  !isNull(body, true)
    ? isNull(token)
      ? (body.token = undefined)
      : (body.token = token)
    : undefined;

  let isValid: boolean = new Validator(_response, body).validate({
    repository: 'required',
  });

  if (!isValid) {
    return;
  }

  response(_response, { message: 'Requested successfully !' });
};
