import React from 'react'
import BoardsContainer from '@/components/BoardsContainer'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const boardsPage = () => {
  return (
    <div className="bg-linear-to-br from-pink-100 to-pink-200 mt-16">
      <Navbar/>
      <BoardsContainer/>
      <Footer/>
    </div>
  )
}

export default boardsPage