import { NowRequest, NowResponse } from '@vercel/node';
import Github from '../app/github/Github';

export default (request: NowRequest, response: NowResponse) => {
  response.setHeader('Content-Type', 'application/json');
  //const { name = 'World' } = request.query;
};
