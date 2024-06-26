import React from 'react';
import styles from './Question.module.scss';

interface QuestionProps {
    question: string;
    options: { [key: string]: string };
    selectedOption: string | null;
    onSelectOption: (option: string) => void;
}

const Question = ({ question, options, selectedOption, onSelectOption }: QuestionProps) => {
    return (
        <div className={styles.question}>
            <h2>{question}</h2>
            <ul>
                {Object.keys(options).map(option => (
                    <li key={option}>
                        <button
                            onClick={() => onSelectOption(option)}
                            disabled={!!selectedOption}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;
