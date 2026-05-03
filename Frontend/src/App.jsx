import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/Feed' element={<h1><Feed/></h1>}/>
      </Routes>
    </Router>
  )
}

export default App