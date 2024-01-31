import React, { useState } from 'react'
import ReduxImage from './assets/redux.svg';
import ReactImage from './assets/react.svg';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './reducer/counterSlice';
import './App.css';
import DisplayQuote from './DisplayQuote';
import Calculator from './Calculator';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(2);

  return (
    <div>
      <img className='logo' src={ReactImage} alt="" />
      <img className='logo' src={ReduxImage} alt="" />
      <h1>REACT + REDUX</h1>

      <h2>Counter : <span>{counter}</span></h2>
      <button onClick={() => dispatch(increment())}>
        +1
      </button>
      <button onClick={() => dispatch(decrement())}>
        -1
      </button>

      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={
          (e) => setAmount(parseInt(e.target.value))
        }
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        + {amount}
      </button>

      <br /><br />
      <DisplayQuote />

      <br /><br />
      <Calculator />
    </div>
  )
}

export default App