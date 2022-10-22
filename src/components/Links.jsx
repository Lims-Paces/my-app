import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const Links = ({ text, linkname }) => {
  return (
    <Router>
      <div>
        <a href={linkname} target='_blank' rel='noreferrer'>
          <button>{text}</button>
        </a>
      </div>
    </Router>
  )
}

export default Links
