import { loadFile as lf } from '@toolkip/server';

export const loadFile = async (filename: string) => {
  return await lf({ filename });
};
