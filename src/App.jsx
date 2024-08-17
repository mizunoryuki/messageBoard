import { useState} from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { CreateNewThreads } from './components/CreateNewThread'
import { ShowAllThreads } from './components/ShowAllThreads';
import './App.css'

function App() {
  const [getResponse, setGetResponse] = useState([])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>Not Found Page</h1>} />
        <Route path='/threads' element={<ShowAllThreads getResponse={getResponse} setGetResponse={setGetResponse} />} />
        <Route path="/threads/new" element={<CreateNewThreads />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
