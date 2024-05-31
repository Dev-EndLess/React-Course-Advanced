import React from "react"
import { useState } from "react"

function App1() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prevState => prevState + 1)
  }

  function decrement() {
    setCount(prevState => prevState - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Change +1!</button>
      <button onClick={decrement}>Change -1!</button>
    </div>
  )
}

export default App1