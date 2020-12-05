import { NowRequest, NowResponse } from '@vercel/node';

export default (request: NowRequest, response: NowResponse) => {
  const { name = 'World' } = request.query;
  response.setHeader('Content-Type', 'application/json');
  response.status(200).send({
    name: 'moria',
  });
};
