import initSqlJs from 'sql.js';
import config from '../src/config';
import axios from 'axios';

initSqlJs(config).then((SQL) => {
  axios
    .get(
      'https://github.com/morteza-jamali/sample-data/raw/master/sqlite_WUXZGIQM.db',
      {
        responseType: 'arraybuffer',
      }
    )
    .then((res) => {
      let uInt8Array = new Uint8Array(res.data);
      let db = new SQL.Database(uInt8Array);

      response.setHeader('content-type', 'application/json');
    });
});
