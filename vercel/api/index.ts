import { NowRequest, NowResponse } from '@vercel/node';

export default (request: NowRequest, response: NowResponse) => {
  response.setHeader('Content-Type', 'application/json');
  //const { name = 'World' } = request.query;
};
