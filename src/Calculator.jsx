import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculate } from './thunks/calculatorThunks';
import { setResult } from './reducer/calculatorSlice';

function Calculator() {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.calculator.result);
    const [expression, setExpression] = useState('');

    const handleInputChange = (e) => {
        setExpression(e.target.value);
    }

    const handleCalculation = () => {
        dispatch(calculate(expression))
            .then((res) => {
                dispatch(setResult(res));
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <h1>
                Calculator
            </h1>
            <input type="text" value={expression} onChange={handleInputChange} />
            <button className='btn' onClick={handleCalculation}>Calculate</button>
            <h3>Result: <span>{result ? result.payload : ''}</span></h3>
        </div>
    )
}

export default Calculator;
