import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1);
  }
  return (
    <>
      <div className="card">

        <button onClick={incrementCount}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
