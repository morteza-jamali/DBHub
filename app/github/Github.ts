import GitHub from 'github-api';
import { useHistory } from 'react-router-dom';
import routes from '../constants/routes.json';
const exec = require('child_process').exec;
const commandExists = require('command-exists');

export default class Github {
  exec: any;
  history: any;

  constructor() {
    this.exec = exec;
    this.history = useHistory();
  }

  checkCLIInstalled() {
    commandExists('gh', (err: any, commandExists: any) => {
      if(commandExists) {
        this.history.push(routes.HOME);
      } else {
        this.history.push(routes.LOGIN)
      }
    });
  }
}
