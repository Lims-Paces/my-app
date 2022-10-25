import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Error from './components/Error'
import BooksPage from './pages/BooksPage'
import Design from './pages/Design'

import Homepage from './pages/Homepage'
import Pitch from './pages/Pitch'
import PythonBookPage from './pages/PythonBookPage'

const App = () => {
  return (
    <div className='flex flex-col items-center pt-16 px-px md:px-7 gap-6 relative'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<Error />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/pythonbooks' element={<PythonBookPage />} />
        <Route path='/design' element={<Design />} />
        <Route path='/pitch' element={<Pitch />} />
      </Routes>

      {/* <Profile />
      <LinkList />
      <Icons />
      <Footer /> */}
    </div>
  )
}

export default App
