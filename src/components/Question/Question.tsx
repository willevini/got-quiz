import React from 'react';

interface QuestionProps {
    question: string;
    options: { [key: string]: string };
    selectedOption: string | null;
    onSelectOption: (option: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, selectedOption, onSelectOption }) => {
    return (
        <div>
            <h2>{question}</h2>
            <ul>
                {Object.keys(options).map((option) => (
                    <li key={option}>
                        <button onClick={() => onSelectOption(option)} disabled={selectedOption !== null}>
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;
