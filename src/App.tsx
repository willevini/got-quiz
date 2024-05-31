import React, { useState } from 'react';
import {QUESTIONS} from "./questions";

import Quiz from './components/Quiz';
import Result from './components/Result';
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";

import styles from './App.module.scss';

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [house, setHouse] = useState('');

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleQuizComplete = (finalHouse: string) => {
    setHouse(finalHouse);
    setQuizComplete(true);
  };

  const handleRetry = () => {
    setQuizStarted(false);
    setQuizComplete(false);
    setHouse('');
  };

  return (
      <div className={`${styles.app} ${styles[house.toLowerCase()]}`}>
        {quizStarted && <h1>Quiz de Game of Thrones</h1>}
        {!quizStarted && !quizComplete && <WelcomeScreen onStartQuiz={handleStartQuiz} />}
        {quizStarted && !quizComplete && (
            <Quiz questions={QUESTIONS} onQuizComplete={handleQuizComplete} />
        )}
        {quizComplete && <Result house={house} onRetry={handleRetry} />}
      </div>
  );
};

export default App;
