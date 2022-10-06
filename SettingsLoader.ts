import * as FileSystem from 'fs';

export interface ISettingsLoader<T> {
  loadSettings(): T
}

export class SettingsLoader<T> implements ISettingsLoader<T> {
  loadSettings(): T {
    const settingsFile = FileSystem.readFileSync('./settings.json');
    const settingsObject: unknown = JSON.parse(settingsFile.toString());
    return settingsObject as T;    
  }
}