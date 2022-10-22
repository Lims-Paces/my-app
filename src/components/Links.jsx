import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Links = ({ text, linkname }) => {
  return (
    <Router>
      <div>
        <a href={linkname} target='_blank' rel='noreferrer'>
          <button>{text}</button>
        </a>

        <Link to={linkname}>
          <button>{text}</button>
        </Link>
      </div>
    </Router>
  )
}

export default Links
