import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'

function App() {
  const [Data, setData] = useState([])

  const addData = (value) => {
    setData([...Data, value])
  }

  const removeData = (Delindex) => {
    setData(Data.filter((item, index) => index !== Delindex))
  }

  return (
    <>
      <div className='button-container'>
        <div>
          <button onClick={() => {
            const title = prompt("Enter Card Title");
            const description = prompt("Enter Card Description");
            addData({ title, description, image : reactLogo });
          }}>
            Add Card
          </button>
        </div>
      </div>

      <h2>Data List:</h2>
      <div className="card-container">
        {Data.map((item, index) => {
          return (
            <div className='card' key={index}>
              <div className="card-header">
                {item.title && <h3 style={{ margin: 0, textDecoration: 'underline' }}>{item.title}</h3>}
                <button onClick={() => removeData(index)}>
                  <span role="img" aria-label="delete">🗑️</span>
                </button>
              </div>
              <div className="card-image">
                <img src={item.image} alt="Placeholder" />
              </div>
              <div className="card-body">
                {item.description && <p>{item.description}</p>}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
