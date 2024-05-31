import React from 'react';
import styles from './WelcomeScreen.module.scss';

interface WelcomeScreenProps {
    onStartQuiz: () => void;
}

const WelcomeScreen = ({ onStartQuiz }: WelcomeScreenProps) => {
    return (
        <div className={styles.welcome}>
            <h1>Bem-vindo ao Quiz de Game of Thrones!</h1>
            <p>Descubra a qual casa você pertence neste universo fantástico.</p>
            <button onClick={onStartQuiz}>Iniciar Quiz</button>
        </div>
    );
};

export default WelcomeScreen;
