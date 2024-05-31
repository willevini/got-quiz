export interface QuestionType {
    question: string;
    options: { [key: string]: string };
}

export interface QuizProps {
    questions: QuestionType[];
    onQuizComplete: (house: string) => void;
}

export interface ResultProps {
    house: string;
    onRetry: () => void;
}
