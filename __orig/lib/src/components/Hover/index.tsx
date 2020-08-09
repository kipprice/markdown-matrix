import React from 'react';
import './styles.scss';
import cx from 'classnames';

export type HoverProps = {
    className?: string;
};

export const Hover: React.FC<HoverProps> = ({ children, className }) => {
    return(
        <div className={cx('hover', className)}>
            {children}
        </div>
    );
};
