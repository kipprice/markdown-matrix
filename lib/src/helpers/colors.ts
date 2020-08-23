import { RowName } from "../models";

const MIN_OPACITY = 0.7;

export const getOpacity = (bucket: 'other' | RowName) => {
  if ((bucket === "other")) {
    return MIN_OPACITY;
  }
  return 1;
};
