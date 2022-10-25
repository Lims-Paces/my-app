import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Links = ({ text, linkname }) => {
  // const { id, text, linkname } = props
  return (
    <div className='bg-slate-200 my-3 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium'>
      <Link to={linkname} target='_blank'>
        <button>{text}</button>
      </Link>
    </div>
  )
}

export default Links
