import {get} from '@loopback/rest';
import initSqlJs from 'sql.js';
import path from 'path';
import axios from 'axios';

let content: any;
const config: any = {
  locateFile: (file: any) =>
    path.resolve(__dirname, `../../node_modules/sql.js/dist/${file}`),
};

(async () => {
  const SQL = await initSqlJs(config);
  await axios
    .get(
      'https://github.com/morteza-jamali/sample-data/raw/master/sqlite_WUXZGIQM.db',
      {
        responseType: 'arraybuffer',
      },
    )
    .then(response => {
      let uInt8Array = new Uint8Array(response.data);
      let db = new SQL.Database(uInt8Array);
      content = db.exec('SELECT * FROM company');
    })
    .catch(error => console.log(error));
})();

export class DataController {
  @get('/data')
  data(): string {
    return content;
  }
}
