export default (path: any) => {
  return {
    locateFile: (file: any) => path.resolve(__dirname, `../assets/${file}`),
  };
};
