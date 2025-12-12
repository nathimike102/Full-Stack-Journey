import React, {use, useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const baseUrl = 'http://localhost:5001/api/';
  const [cards, setCards] = useState([]);
  
  const fetchData = async () => {
    setCards(cards => []);
    setTimeout(() => {
      axios.get(`${baseUrl}products`)
      .then(response => {
        setCards(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {console.error('There was an error!', error);});
    }, 2000);
  };

  const fetchDataBy = async () => {
    let choice = window.prompt("Enter choice to fetch by (category/id): ");
    let value = window.prompt(`Enter value for ${choice}: `);
    const url = choice === 'id' ? `${baseUrl}products/:${Number(value)}` : `${baseUrl}products?${choice}/:${value}`;
    axios.get(url)
    .then(response => {
      setCards(response.data.data);
      console.log(response.data.data);
    })
    .catch(error => {console.error('There was an error!', error);});
  };

  // const addData = async () => {
  //   const newProduct = {
  //       name: "phone",
  //       description: "High-performance mobile phone",
  //       price: 799.99,
  //       category: "Electronics",
  //       stock: 100,
  //       createdAt: new Date('2025-12-12')
  //   };

  //   axios.post(`${baseUrl}products`, newProduct)
  //   .then(response => {console.log('Product added:', response.data);})
  //   .catch(error => {console.error('There was an error adding the product!', error);});
  // };

  useEffect(() => {
    fetchData();
    // fetchDataBy();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Welcome to MVC Task Frontend</h1>
      </div>
      <div className="buttons">
        <button onClick={() => fetchData()}>Fetch Products</button>
        {/* <button onClick={() => {fetchDataBy()}}>Fetch By ?</button> */}
      </div>
      <div className="cards">
        { cards.length > 0 ? (
          cards.map(({id, name, description, price, category, stock, createdAt}) => (
            <div key={id} className="card">
              <h2>{name}</h2>
              <p>{description}</p>
              <p>Price: ${price}</p>
              <p>Category: {category}</p>
              <p>Stock: {stock}</p>
              <p>Created At: {new Date(createdAt).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}   
      </div>
    </>
  )
}

export default App
