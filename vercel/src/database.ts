import initSqlJs from 'sql.js';
import config from './config';
import axios from 'axios';
import path from 'path';

export class Database {
  private db: any;

  async init(db_path: string) {
    const SQL = await initSqlJs(config(path));
    await axios
      .get(db_path, {
        responseType: 'arraybuffer',
      })
      .then((res) => {
        let uInt8Array = new Uint8Array(res.data);
        this.db = new SQL.Database(uInt8Array);
      });
  }

  get database() {
    return this.db;
  }
}

export interface IDatabase extends Database {}
