import React, { useState, useEffect } from "react"
import randomcolor from "randomcolor"

// componentDidMount
// componentDidUpdate
// componentWillUnmount

// Side effects?
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")
  
  useEffect(() => {
      const intervalId = setInterval(() => {
          // setCount(prevCount => prevCount + 1)
      }, 1000)
      return () => clearInterval(intervalId) // component will unmount
  }, []) // replace component did mount []
  
  useEffect(() => {
      setColor(randomcolor())
  }, [count]) // replace component did update
  
  return (
      <div>
          <h1 style={{color: color}}>{count}</h1>
      </div>
  )
}

export default App