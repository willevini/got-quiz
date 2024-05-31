import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import {QUESTIONS} from "./questions";
import styles from './App.module.scss';

const App: React.FC = () => {
  const [quizComplete, setQuizComplete] = useState(false);
  const [house, setHouse] = useState('');

  const handleQuizComplete = (finalHouse: string) => {
    setHouse(finalHouse);
    setQuizComplete(true);
  };

  const handleRetry = () => {
    setQuizComplete(false);
    setHouse('');
  };

  return (
      <div className={styles.app}>
        <h1>Descubra sua casa em Game of Thrones</h1>
        {quizComplete ? (
            <Result house={house} onRetry={handleRetry} />
        ) : (
            <Quiz questions={QUESTIONS} onQuizComplete={handleQuizComplete} />
        )}
      </div>
  );
};

export default App;
