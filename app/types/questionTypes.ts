type ImageProps = {
    src: string;
    width: number;
    height: number;
};

type BaseQuestionProps = {
    id: string;
    questionKey: string;
    type: string;
    label: string;
    description?: string;
    options: {
        type: string;
        label: string;
        value: string;
        image?: ImageProps;
    }[];
};

export type SingleAnswerQuestionProps = BaseQuestionProps;

export type MultipleAnswerQuestionProps = BaseQuestionProps & {
    buttonText: string;
};

export type AdviceProps = {
    id: string;
    type: string;
    label: string;
    description: string;
    image: ImageProps;
    description_bottom1: string;
    description_bottom2: string;
    buttonText: string;
};

export type NumberInputQuestionProps = {
    questionKey: string;
    id: string;
    type: string;
    label: string;
    inputLabel: string;
    buttonText: string;
};

export type withQuestionTypeProps =
    | SingleAnswerQuestionProps
    | MultipleAnswerQuestionProps
    | NumberInputQuestionProps
    | AdviceProps;
