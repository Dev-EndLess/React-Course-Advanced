import React from 'react';
import { useState } from 'react';
import GrandParent from './GrandParent';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prevState => prevState + 1)
  }

  return (
    <div>
      <button onClick={increment}>+1</button>
      <h2>{count}</h2>
      <p>I'm the App component</p>
      <GrandParent />
      <GrandParent />
    </div>
  )
}

export default App;
