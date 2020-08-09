import { Element, RowName } from "../models";

type CompetencyBucket = {
  competencies: Element[];
  origin: RowName | 'other';
};

export const bucketBySpecificRow = (
  competencies: Element[],
  row: RowName,
): CompetencyBucket[] => {
  const buckets: Record<string, CompetencyBucket> = {};

  for (let c of competencies) {
    let originKey = row;

    // check for different origin altogether
    const { originRow } = c;
    if (row !== originRow) { originKey = "other"; }

    // create the bucket if need be & add to it
    if (!buckets[originKey]) {
      buckets[originKey] = { competencies: [], origin: originKey };
    }
    buckets[originKey].competencies.push(c);

  }

  // sort the buckets appropriately
  return [
    buckets["other"],
    buckets[row],
  ];
};

