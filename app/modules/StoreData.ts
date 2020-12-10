import { app, BrowserWindow } from 'electron';
import path from 'path';
import fs from 'fs';

export class StoreData {
  data_path: string;
  file_path: string;

  constructor(file_name: string) {
    this.data_path = app.getPath('userData');
    this.file_path = path.join(this.data_path, file_name);
  }

  getData(): any {
    try {
      return fs.readFileSync(this.file_path);
    } catch (error) {
      console.log(error);
    }
  }

  setData(data: any) {
    try {
      fs.writeFileSync(this.file_path, data);
    } catch (error) {
      console.log(error);
    }
  }
}

export class LocalStorage {
  window: BrowserWindow;
  scope: string;

  constructor(w: BrowserWindow, scope: string) {
    this.window = w;
    this.scope = scope;
  }

  async getItem(key: string) {
    let data: string = '';
    try {
      await this.window.webContents
        .executeJavaScript(
          `
          (() => {
            if(localStorage.hasOwnProperty('${this.scope}_${key}')) {
              return localStorage.getItem('${this.scope}_${key}');
            }

            return null;
          })();
        `
        )
        .then((value: any) => {
          data = JSON.parse(value);
        });
    } catch (error) {
      console.log(error);
    }

    return data;
  }

  async setItem(key: string, data: any) {
    try {
      await this.window.webContents.executeJavaScript(
        `localStorage.setItem(${this.scope}_${key}, ${JSON.stringify(data)})`
      );
    } catch (error) {
      console.log(error);
    }
  }
}
