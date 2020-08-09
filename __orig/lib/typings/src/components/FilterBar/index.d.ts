import React from "react";
import { OptionType } from '../../models';
import "./styles.scss";
export declare type FilterBarProps = {
    title: string;
    subtitle: string;
    enabledOptions: OptionType[];
};
export declare const FilterBar: React.FC<FilterBarProps>;
