/// <reference types="react" />
export declare type FiltersProps<T extends string> = {
    title: string;
    filters: T[];
    onFilterSelect: (filter: T) => void;
    isFilterSelected: (filter: T) => boolean;
    onShowAll?: () => void;
    onHideAll?: () => void;
};
export declare const Filters: <T extends string>({ title, filters, onFilterSelect, onShowAll, onHideAll, isFilterSelected }: FiltersProps<T>) => JSX.Element;
