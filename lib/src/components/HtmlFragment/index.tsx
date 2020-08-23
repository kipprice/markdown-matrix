import React from 'react';
import { useSelector } from 'react-redux';
import { selectRenderHtml } from '../../selectors';

export type HtmlFragmentProps = {
    content: string
};

export const HtmlFragment: React.FC<HtmlFragmentProps> = ({ content }) => {
    const renderHtml = useSelector(selectRenderHtml);

    if (renderHtml) {
        return <span dangerouslySetInnerHTML={{ __html: content }} />
    } else {
        return <span>{content}</span>
    }
};
