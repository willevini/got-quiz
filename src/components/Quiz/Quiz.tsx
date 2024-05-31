import React, { useState } from 'react';

import Question from "../Question";

import styles from './Quiz.module.scss';

export interface QuestionType {
    question: string;
    options: { [key: string]: string };
}

interface QuizProps {
    questions: QuestionType[];
    onQuizComplete: (house: string) => void;
}

const Quiz = ({ questions, onQuizComplete }: QuizProps) => {
    const houses = ['Stark', 'Lannister', 'Targaryen', 'Baratheon'];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [scores, setScores] = useState<{ [key: string]: number }>({
        Stark: 0,
        Lannister: 0,
        Targaryen: 0,
        Baratheon: 0,
    });

    const handleSelectOption = (option: string) => {
        const currentQuestion = questions[currentQuestionIndex];
        const house = currentQuestion.options[option];
        setScores({
            ...scores,
            [house]: scores[house] + 1,
        });
        setSelectedOptions([...selectedOptions, option]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            const maxScoreHouse = houses.reduce((a, b) => (scores[a] > scores[b] ? a : b));
            onQuizComplete(maxScoreHouse);
        }
    };

    return (
        <div className={styles.quiz}>
            {currentQuestionIndex < questions.length ? (
                <div className={styles['question-container']}>
                    <Question
                        question={questions[currentQuestionIndex].question}
                        options={questions[currentQuestionIndex].options}
                        selectedOption={selectedOptions[currentQuestionIndex] || null}
                        onSelectOption={handleSelectOption}
                    />
                </div>
            ) : (
                <div>Quiz Finished!</div>
            )}
        </div>
    );
};

export default Quiz;
