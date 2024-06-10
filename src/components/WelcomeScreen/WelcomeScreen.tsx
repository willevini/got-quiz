import React from 'react';
import styles from './WelcomeScreen.module.scss';

interface WelcomeScreenProps {
    onStartQuiz: () => void;
}

const WelcomeScreen = ({ onStartQuiz }: WelcomeScreenProps) => {
    return (
        <div className={styles.welcome}>
            <h1>Game Of Thrones</h1>
            <h1>Guia das Casas</h1>
            <p>Descubra a qual casa você pertence neste universo fantástico.</p>
            <button onClick={onStartQuiz}>Iniciar</button>
        </div>
    );
};

export default WelcomeScreen;
