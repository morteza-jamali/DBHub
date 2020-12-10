import axios from 'axios';
import ghconf from '../constants/github.config.json';

export default class Github {
  access_token: any = false;

  getAuthURL() {
    return `${ghconf.URL.VERIFICATION_DATA}?client_id=${ghconf.APP.CLIENT_ID}&scope=${ghconf.APP.SCOPE}`;
  }

  async getAccessToken(url: string) {
    let code: string = this.getURLCode(url);

    await axios
      .post(
        ghconf.URL.ACCESS_TOKEN,
        {
          client_id: ghconf.APP.CLIENT_ID,
          client_secret: ghconf.APP.CLIENT_SECRET,
          code,
        },
        {
          headers: { 'Accept': 'application/json' }
        }
      )
      .then((response: any) => {
        this.access_token = response.data.access_token;
      });

    return this.access_token;
  }

  private getURLCode(url: string): string {
    const rawCode = /code=([^&]*)/.exec(url) || null;
    const code = rawCode && rawCode.length > 1 ? rawCode[1] : null;
    const error = /\?error=(.+)$/.exec(url);
    if (code) {
      return code;
    } else if (error) {
      console.log(error);
    }

    return '';
  }
}
