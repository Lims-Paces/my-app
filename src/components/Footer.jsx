import React from 'react'
import zuri from '../images/zuri.svg'
import i4g from '../images/I4G.svg'

const Footer = () => {
  return (
    <footer className='w-11/12 flex  px-8 h-40 py-12  md:block'>
      <div className='w-full flex flex-col gap-8 md:gap-0 md:flex-row items-start md:items-end justify-between  border-t h-16 py-8 md:py-12'>
        <img src={zuri} alt='' />
        <small className='test-sm'>HNG Internship 9 Frontend Task</small>
        <img src={i4g} alt='' className='pb-8 md:pb-0' />
      </div>
    </footer>
  )
}

export default Footer

// md:gap-8 lg:gap-32 xl:gap-60
// justify - center
