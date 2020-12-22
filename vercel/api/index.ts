import { NowRequest, NowResponse } from '@vercel/node';

export default (_request: NowRequest, response: NowResponse) => {
  response.setHeader('Content-Type', 'application/json');
  response.status(200).send({name: 'Morteza Jamali'});
};
