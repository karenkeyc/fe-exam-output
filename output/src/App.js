import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewPost from "./pages/NewPost";
import Single from "./pages/Single";
import SingleEdit from './pages/SingleEdit'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/logout" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-new-post" element={<NewPost />} />
        <Route path="/single-post-view" element={<Single />} />
        <Route path="/single-edit-view" element={<SingleEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
