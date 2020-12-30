import { NowResponse } from '@vercel/node';

export const SUCCESS: Number = 0;
export const ERROR: Number = 1;

export interface IResponse {
  message: string;
}

export function response(
  response: NowResponse,
  data: IResponse,
  type: Number = SUCCESS
) {
  response.send({
    type,
    data,
  });
}

export const templates: any = {
  isUndefined(key: string): string {
    return `${key} value is undefined`;
  },
};