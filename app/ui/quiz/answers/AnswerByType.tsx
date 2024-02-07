import React from 'react';

import { AnswerProps } from '@/app/types/answerTypes';

import ImageTextAnswer from './ImageTextAnswer';
import ImageTextCheckbox from './ImageTextCheckbox';

const AnswerByType = (props: AnswerProps) => {
    switch (props.type) {
        case 'text':
        case 'image_text':
            return <ImageTextAnswer {...props} />;
        case 'checkbox':
        case 'image_checkbox':
            return <ImageTextCheckbox {...props} />;
        default:
            return null;
    }
};

export default AnswerByType;
