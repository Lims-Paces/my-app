import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Error from './components/Error'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center pt-16 px-px md:px-7 gap-6 relative'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
