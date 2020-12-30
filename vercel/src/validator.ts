import { NowResponse } from '@vercel/node';
import { response, templates, ERROR } from './response';
import { isNull } from './api';

export class Validator {
  functions: any = {
    required: this.required,
  };
  response: NowResponse;
  data: any;

  constructor(response: NowResponse, data: any) {
    this.response = response;
    this.data = data;
  }

  validate(valid: any): boolean {
    if (isNull(this.data, true)) {
      response(
        this.response,
        { message: templates.isUndefined('Body') },
        ERROR
      );

      return false;
    }

    for (let key in valid) {
      let validations: Array<string> = valid[key].split('|');

      for (let v of validations) {
        if (!isNull(this.functions[v])) {
          if (!this.functions[v](key)) {
            return false;
          }
        }
      }
    }

    return true;
  }

  required(key: string): boolean {
    if (isNull(this.data[key])) {
      response(this.response, { message: templates.isUndefined(key) }, ERROR);

      return false;
    }

    return true;
  }
}
