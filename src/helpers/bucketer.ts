import { Competency, Level, Similarity, CompetencyId } from "../models";

type CompetencyBucket = {
  competencies: Competency[];
  origin: Level | 'other' | 'similar';
};

export const bucketBySpecificLevel = (
  competencies: Competency[],
  level: Level,
  similarityGraph: Record<CompetencyId, Similarity[]>
): CompetencyBucket[] => {
  const buckets: Record<string, CompetencyBucket> = {};

  for (let c of competencies) {
    let originKey = level;

    // check for different origin altogether
    const { originLevel } = c;
    if (level !== originLevel) { originKey = "other"; }

    // check for similarities
    const similarities = similarityGraph[c.id];
    if (similarities?.length > 0) { originKey = 'similar'; }

    // create the bucket if need be & add to it
    if (!buckets[originKey]) {
      buckets[originKey] = { competencies: [], origin: originKey };
    }
    buckets[originKey].competencies.push(c);

  }

  // sort the buckets appropriately
  return [
    buckets["other"],
    buckets['similar'],
    buckets[level],
  ];
};

