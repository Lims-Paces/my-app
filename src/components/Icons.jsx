import React from 'react'
import slack from '../images/slack.svg'
import github from '../images/Icon.svg'

const Icons = () => {
  return (
    <section className='flex align-center justify-center py-6 gap-16 h-16 w-11/12'>
      <img src={slack} alt='' />
      <img src={github} alt='' />
    </section>
  )
}

export default Icons
