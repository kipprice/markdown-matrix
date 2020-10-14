export const EXCLUDE_HEADERS: string[] = [];
const ROW_REGEX = /^\s*?##\s(.+)\s*?$/;
const COLUMN_REGEX = /^\s*?###\s(.+)$/;
const ELEMENT_REGEX = /^\s*?[*-]\s*?(.+)$/;

export const matchRow = (line: string) => _match(ROW_REGEX, line);
export const matchColumn = (line: string) => _match(COLUMN_REGEX, line);
export const matchElement = (line: string) => _match(ELEMENT_REGEX, line);

const _match = (regex: RegExp, line: string) => {
  const match = regex.exec(line);
  if (!match) {
    return "";
  }
  const out = match[1].trim();

  /**
   * this is janky, but because there are some H2s that aren't levels
   * and GH doesn't allow custom IDs on headers, it's otherwise pretty
   * tricky to get at which headers are relevant; open to better
   * suggestions here
   */
  for (let excluded of EXCLUDE_HEADERS) {
    if (out === excluded) {
      return "";
    }
  }

  return out;
};

/**
 * isRelevantHeader
 * ----------------------------------------------------------------------------
 * check if the specified line is a header that indicates a potential level
 */
export const isH2 = (line: string) => {
  const strippedLine = line.replace(/^\s+/, "");
  if (strippedLine.substring(0, 2) === "##" && strippedLine[2] !== "#") {
    return true;
  }
  return false;
};
