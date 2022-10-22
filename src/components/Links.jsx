import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const Links = ({ text, linkname }) => {
  return (
    <Router>
      <section className='bg-slate-200 h-16 w-10/12 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium'>
        <a href={linkname} target='_blank' rel='noreferrer'>
          <button>{text}</button>
        </a>
      </section>
    </Router>
  )
}

export default Links
