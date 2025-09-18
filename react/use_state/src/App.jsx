import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [Data, setData] = useState([1, 2, 3])

  const addData = (value) => {
    setData([...Data, value])
  }

  const removeData = (value) => {
    setData(Data.filter(item => item !== value))
  }

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

      <div className="card">
        <button onClick={() => {
          const x = prompt("Enter a number");
          addData(Number(x));
        }}>
          Add Data
        </button>
      </div>

      <div className="card">
        <button onClick={() => {
          const x = prompt("Enter a number");
          removeData(Number(x));
        }}>
          Remove Data
        </button>
      </div>
      
      <div className="card">
        <h2>Data List:</h2>
        <p>{Data.join(" -> ")}</p>
      </div>
    </>
  )
}

export default App
