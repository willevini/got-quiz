import React, { useState } from 'react';
import styles from './Quiz.module.scss';
import {QuizProps} from "../../types";
import Question from "../Question";

const houses = ['Stark', 'Lannister', 'Targaryen', 'Baratheon'];

const Quiz: React.FC<QuizProps> = ({ questions, onQuizComplete }) => {
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
