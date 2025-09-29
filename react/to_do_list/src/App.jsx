
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [Data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const newToDo = {
      title: title,
      description: description
    };
    setData([...Data, newToDo]);
  }

  const handleDelete = (Del_index) => {
    setData(Data.filter((item, index) => index !== Del_index))
  }

  return (
    <>
      <section>
        <h1 className="myHeading">
          Add Your TO-DO
        </h1>
        <form className="myForm" onSubmit={(e) => {handleSubmit(e); e.target.reset(); }}>
          <table className="myTable">
            <tbody>
              <tr className="myRow">
                <td><label htmlFor="Title">Title:</label></td>
                <td>
                  <input className='myInput' type="text" id="title" name="title" placeholder='Enter Your Title' maxLength={10} required />
                </td>
              </tr>
              <tr className="myRow">
                <td><label htmlFor="description">Description:</label></td>
                <td>
                  <textarea className='myInput' id="description" name="description" placeholder='Enter Your Description' maxLength={100}></textarea>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={{textAlign: 'center'}}>
                  <button className="myButton" type="submit"> Add To-Do </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </section>
      <section>
        <h1 className="myHeading">
          TO-DO LIST
        </h1>
        <div className="mySection">
          {Data.length === 0 && <h2 style={{ textAlign: 'center', color: 'black' }}>No TO-DO's Found</h2>}
          {Data.map((item, index) => {
            return (
              <div className='card' key={index}>
                <div className="card-header">
                  {item.title && <h3 style={{ margin: 0, textDecoration: 'underline' }}>{item.title}</h3>}
                  <button onClick={() => handleDelete(index)}>
                    <span role="img" aria-label="delete">🗑️</span>
                  </button>
                </div>
                <div className="card-content">
                  <input type="checkbox" />
                  <div className="card-body">
                    {item.description && <p>{item.description}</p>}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default App