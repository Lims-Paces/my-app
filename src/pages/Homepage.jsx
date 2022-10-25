import React from 'react'

import Footer from '../components/Footer'
import Icons from '../components/Icons'
import LinkList from '../components/LinkList'
import Profile from '../components/Profile'

const Homepage = () => {
  return (
    <>
      <Profile />
      <LinkList />
      <Icons />
      <Footer />
    </>
  )
}

export default Homepage
