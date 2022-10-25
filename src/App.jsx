import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Error from './components/Error'

import Homepage from './pages/Homepage'

const App = () => {
  return (
    <div className='flex flex-col items-center pt-16 px-px md:px-7 gap-6 relative'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/error' element={<Error />} />
      </Routes>

      {/* <Profile />
      <LinkList />
      <Icons />
      <Footer /> */}
    </div>
  )
}

export default App
