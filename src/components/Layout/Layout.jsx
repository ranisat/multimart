import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'

const Layout = () => {
  return (
    <main className='overflow-hidden'>
      <Header/>
      <div>
        <Routers/>
      </div>
      <Footer/>
    </main>
  )
}

export default Layout
