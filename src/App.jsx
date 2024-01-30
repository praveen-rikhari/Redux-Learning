import React from 'react'
import ReduxImage from './assets/redux.svg';
import ReactImage from './assets/react.svg';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './reducer/counterSlice';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
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
    </div>
  )
}

export default App