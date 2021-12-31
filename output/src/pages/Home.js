import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import Header from './Header'
import Carousel from './Carousel'
import NewsList from './NewsList'
import Footer from './Footer'

const Home = () => {
  return (
    <Router>
      <Header />
      <Carousel/>
      <NewsList/>
      <Footer/>
    </Router>
  )
}

export default Home


