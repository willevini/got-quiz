import React from 'react';
import {ResultProps} from "../../types";


const Result: React.FC<ResultProps> = ({ house, onRetry }) => {
    return (
        <div>
            <h2>Resultado</h2>
            <p>Você pertence à casa {house}!</p>
            <button onClick={onRetry}>Tentar novamente</button>
        </div>
    );
};

export default Result;
