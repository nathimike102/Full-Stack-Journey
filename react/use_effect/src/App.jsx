import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Count has changed:', count)
  }, [count])

  return (
    <>
      <h1>Current Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default App;
