import axios from 'axios';
import ghconf from '../constants/github.config.json';

export default class Github {
  async getUserVerificationData() {
    let data: any;

    await axios
    .post(ghconf.URL.VERIFICATION_DATA, {
      client_id: ghconf.APP.CLIENT_ID,
      scope: ghconf.APP.SCOPE
    },{
      headers: { 'Accept': 'application/json' }
    })
    .then((response) => {
      data = response;
    })
    .catch((error) => {
      console.error(error);
    });

    return data;
  }
}
