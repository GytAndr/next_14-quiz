type ImageProps = {
    src: string;
    width: number;
    height: number;
};

export type AnswerProps = {
    type: string;
    label: string;
    value: string;
    image?: ImageProps;
    onAnswerSelect: (value: string) => void;
    selectedAnswers?: string | string[];
};
