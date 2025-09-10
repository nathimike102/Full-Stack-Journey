import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCards from './components/MyCards'

function App() {

  const myCards = [
    {
      image: reactLogo,
      title: 'React',
      desc: 'A JavaScript library for building user interfaces'
    },
    {
      image: viteLogo,
      title: 'Vite',
      desc: 'A next generation front-end tool'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      title: 'JavaScript',
      desc: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
    }
  ]

  return (
    <>
      <div className="parent">
        {
          myCards.map((card, index) => (
            <MyCards key={index} Data={card} />
          ))
        }
      </div>
    </>
  )
}

export default App
