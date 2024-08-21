import { useState} from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { CreateNewThreads } from './components/CreateNewThread'
import { ShowAllThreads } from './components/ShowAllThreads';
import { ShowAllPosts } from './components/ShowAllPosts';
import {NotFoundPage} from './components/NotFoundPage';
import { Header } from './components/Header';
import './App.scss'

function App() {
  const [getResponse, setGetResponse] = useState([])
  const [selectedThread, setSelectedThread] = useState({
    id: "",
    title: "",
  })
  const thread = `/threads/:${selectedThread.id}`


  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/threads" element={<ShowAllThreads getResponse={getResponse} setGetResponse={setGetResponse} selectedThread={selectedThread} setSelectedThread={setSelectedThread} />} />
        <Route path="/threads/new" element={<CreateNewThreads />} />
        <Route path={thread}  element={<ShowAllPosts threadId={selectedThread.id} threadTitle={selectedThread.title} />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
