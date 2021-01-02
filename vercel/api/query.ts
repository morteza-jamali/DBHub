import { runAPI } from '../src/api';

export default async (...params: any) => {
  return await runAPI(params);
};
