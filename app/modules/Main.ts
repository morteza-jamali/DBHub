import { remote, shell } from 'electron';
import path from 'path';

export const _window = (): any => {
  return remote.getCurrentWindow();
};

export const _app = (): any => {
  return remote.app;
};

export const RESOURCES_PATH = _app().isPackaged
  ? path.join(process.resourcesPath, 'resources')
  : path.join(__dirname, '../resources');

export const getAssetPath = (...paths: string[]): string => {
  return path.join(RESOURCES_PATH, ...paths);
};

export const openURL = (url: string) => {
  shell.openExternal(url);
};
