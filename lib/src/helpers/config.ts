import { ElementWrapperProps, HeadingWrapperProps } from '../components';

export type Config = {
    wrapper?: React.FC<ElementWrapperProps>;
    headingWrapper?: React.FC<HeadingWrapperProps>;
}

export const config: Config  = {}