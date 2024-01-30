import React from 'react'
import ReduxImage from './assets/redux.svg';
import ReactImage from './assets/react.svg';
import './App.css'

function App() {
  return (
    <div>
      <img className='logo' src={ReactImage} alt="" />
      <img className='logo' src={ReduxImage} alt="" />
      <h1>REACT + REDUX</h1>
    </div>
  )
}

export default App