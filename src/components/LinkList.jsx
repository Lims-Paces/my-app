import React from 'react'

import Links from './Links'

const details = [
  {
    id: 'twitter_link',
    text: 'Twitter Link',
    linkname: 'https://twitter.com/JoyPaces',
  },
  {
    id: 'btn__zuri',
    text: 'Zuri Team',
    linkname: 'https://training.zuri.team/',
  },
  {
    id: 'books',
    text: 'Zuri Books',
    linkname: '/books',
  },
  {
    id: 'book__python',
    text: 'Python Books',
    linkname: '/pythonbooks',
  },
  {
    id: 'pitch',
    text: 'Background Check for Coders',
    linkname: '/pitch',
  },
  {
    id: 'book__design',
    text: 'Design Books',
    linkname: '/design',
  },
]

const LinkList = () => {
  return (
    <div className='w-10/12 flex flex-col'>
      {details.map((detail) => {
        return <Links key={detail.id} {...detail} />
      })}
    </div>
  )
}

export default LinkList
