import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='flex flex-col items-center pt-16 px-px md:px-7 gap-6 relative'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
