import React from 'react'
import Footer from './components/Footer'
import Icons from './components/Icons'
import Links from './components/Links'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className='flex flex-col items-center pt-16 px-7 gap-6 relative'>
      <Profile />
      <Links text='Twitter Link' linkname='https://twitter.com/JoyPaces' />
      <Links text='Zuri Team' linkname='https://training.zuri.team/' />
      <Links text='Zuri Books' linkname=' http://books.zuri.team' />
      <Links text='Python Books' linkname='https://books.zuri.team/' />
      <Links
        text='Background Check for Coders'
        linkname='https://background.zuri.team'
      />
      <Links
        text='Design Books'
        linkname='https://books.zuri.team/design-rules'
      />
      <Icons />
      <Footer />
    </div>
  )
}

export default App
