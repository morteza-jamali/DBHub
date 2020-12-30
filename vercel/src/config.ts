import path from 'path';

export default {
  locateFile: (file: any) => path.resolve(__dirname, `../assets/${file}`),
};
