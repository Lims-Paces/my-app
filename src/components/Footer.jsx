import React from 'react'
import zuri from '../images/zuri.svg'
import i4g from '../images/I4G.svg'

const Footer = () => {
  return (
    <footer className='w-11/12  px-8 h-40  py-12 '>
      <div className='flex justify-center items-end gap-72 border-t h-16 '>
        <img src={zuri} alt='' />
        <small>HNG Internship 9 Frontend Task</small>
        <img src={i4g} alt='' />
      </div>
    </footer>
  )
}

export default Footer
