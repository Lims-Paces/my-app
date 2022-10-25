import React from 'react'
import zuri from '../images/zuri.svg'
import i4g from '../images/I4G.svg'

const Footer = () => {
  return (
    <footer className='w-11/12 flex px-8 h-40  py-12 hidden md:block'>
      <div className='w-11/12 flex  items-end justify-between  border-t h-16 '>
        <img src={zuri} alt='' />
        <small>HNG Internship 9 Frontend Task</small>
        <img src={i4g} alt='' />
      </div>
    </footer>
  )
}

export default Footer

// md:gap-8 lg:gap-32 xl:gap-60
// justify - center
