import { NowResponse } from '@vercel/node';
import { response, templates, ERROR } from './response';
import { isNull } from './api';

export class Validator {
  functions: any;
  _response: NowResponse;
  data: any;

  constructor(_response: NowResponse, data: any) {
    this._response = _response;
    this.data = data;
    this.functions = {
      required: this.required,
      depend: this.depend,
    };
  }

  validate = (valid: any): boolean => {
    if (isNull(this.data, true)) {
      response(
        this._response,
        { message: templates.isUndefined('Body') },
        ERROR
      );

      return false;
    }

    for (let key in valid) {
      let validations: Array<string> = valid[key].split('|');

      for (let v of validations) {
        let { func, param } =
          v.indexOf(':') > -1
            ? { func: v.split(':')[0], param: [key, v.split(':')[1]] }
            : { func: v, param: key };

        if (!isNull(this.functions[func])) {
          if (!this.functions[func](param)) {
            return false;
          }
        }
      }
    }

    return true;
  };

  required = (key: string): boolean => {
    if (isNull(this.data[key])) {
      response(this._response, { message: templates.isUndefined(key) }, ERROR);

      return false;
    }

    return true;
  };

  depend = (key: string): boolean => {
    if (!isNull(this.data[key[0]]) && isNull(this.data[key[1]])) {
      response(
        this._response,
        { message: templates.dependOn(key[0], key[1]) },
        ERROR
      );

      return false;
    }

    return true;
  };
}
