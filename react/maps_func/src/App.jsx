import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const myCards = [
    { image : reactLogo, title: 'React', desc: 'This is React' },
    { image : viteLogo, title: 'Vite', desc: 'This is Vite' },
    { image : reactLogo, title: 'React', desc: 'This is React' }
  ]

  return (
    <>
      <div className="parent">
        {
          myCards.map( (card) => (
            <div className="card">
              <img src={card.image} className="logo" alt="logo" />
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </div>
          ) )
        }
      </div>
    </>
  )
}

export default App
