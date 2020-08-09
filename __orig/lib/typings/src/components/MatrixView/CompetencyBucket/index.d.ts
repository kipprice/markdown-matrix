import React from "react";
import { Element, RowName } from "../../../models";
import "./styles.scss";
export declare type CompetencyBucketProps = {
    competencies: Element[];
    row: RowName;
    origin: 'other' | RowName;
    opacity: number;
};
export declare const CompetencyBucket: React.FC<CompetencyBucketProps>;
