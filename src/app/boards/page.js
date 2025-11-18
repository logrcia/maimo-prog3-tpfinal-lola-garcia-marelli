import React from 'react'
import BoardsContainer from '@/components/BoardsContainer'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const boardsPage = () => {
  return (
    <div>
      <Navbar/>
      <BoardsContainer/>
      <Footer/>
    </div>
  )
}

export default boardsPage