/// <reference types="react" />
import "./styles.scss";
export declare type FilterProps = {
    label: string;
    isSelected: boolean;
    onToggle: () => void;
};
export declare const Filter: ({ label, isSelected, onToggle }: FilterProps) => JSX.Element;
