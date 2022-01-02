import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
// import Login from './Login'
import NewsList from '../components/NewsList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Carousel/>
      {/* <Login /> */}
      <NewsList/>
      <Footer/>
    </>
  )
}

export default Home


