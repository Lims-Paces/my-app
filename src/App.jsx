import React from 'react'
import Links from './components/Links'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className=''>
      <Profile />
      <Links text='Twitter Link' />
      <Links text='Zuri Team' linkname='https://training.zuri.team/' />
      <Links text='Zuri Books' />
      <Links text='Python Books' />
      <Links text='Background Check for Coders' />
      <Links text='Design Books' />
    </div>
  )
}

export default App
