import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Error from './components/Error'
import Footer from './components/Footer'
import Icons from './components/Icons'
import Profile from './components/Profile'
import LinkList from './components/LinkList'

const App = () => {
  return (
    <div className='flex flex-col items-center pt-16 px-px md:px-7 gap-6 relative'>
      <Profile />
      <LinkList />
      <Icons />
      <Footer />
    </div>
  )
}

export default App
