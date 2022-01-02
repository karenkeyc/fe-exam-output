import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import NewsList from '../components/NewsList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Carousel/>  
      <NewsList/>
      <Footer/>
    </>
  )
}

export default Home


