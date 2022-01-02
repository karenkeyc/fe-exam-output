import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NewPost from './pages/NewPost'
// import Single from './pages/Single'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/logout" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route exact path="/create-new-post" element={<NewPost />} />
          {/*
          <Route exact path="/single-post" element={<Single />} /> */}
      </Routes>
    </Router>
  )
}

export default App
