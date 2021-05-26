import { loadFile as lf } from '@toolkip/server';
import { parseFile } from './parseFile';

export const loadFile = async (filename: string) => {
  return await lf({ filename });
};

export const loadAndParseFile = async (filename: string) => {
  const loaded = await lf({ filename })
  const parsed = parseFile(loaded)
  return parsed
}