import React from 'react'
import { Link } from 'react-router-dom'

const Links = ({ text, linkname }) => {
  // const { id, text, linkname } = props
  return (
    <div className='bg-slate-200 my-3 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium hover:bg-slate-300'>
      <Link to={linkname} target='_blank'>
        <a href={linkname} target='_blank' rel='noreferrer'>
          <button>{text}</button>
        </a>
      </Link>
    </div>
  )
}

export default Links
