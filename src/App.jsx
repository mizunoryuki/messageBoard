import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [getResponse, setGetResponse] = useState([])


  useEffect(() => {
    fetch('https://railway.bulletinboard.techtrain.dev/threads')
    .then(Response => Response.json()
  .then(myJson => setGetResponse(myJson)))
  .catch((error) => console.error('Error fetching data:', error));
},[]);

const handleClick = () => {
  console.log(getResponse)
  }

  return (
    <>
    <button onClick={handleClick} >CLICK THIS</button>
    <ul>
    {Object.keys(getResponse).map((item) => (
    <li key={item}>
      <p>   id: {getResponse[item].id}</p>
      <p>title: {getResponse[item].title}</p>
    </li>
    ))}
    </ul>
    </>
  )
}

export default App
