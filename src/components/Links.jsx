import React from 'react'

const Links = (props) => {
  return (
    <div className='w-10/12 flex flex-col'>
      <div className='bg-slate-200 my-3 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium hover:bg-slate-300'>
        <a href='https://twitter.com/JoyPaces' target='_blank' rel='noreferrer'>
          <button>Twitter Link</button>
        </a>
      </div>
      <div className='bg-slate-200 my-3 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium hover:bg-slate-300'>
        <a
          href='https://training.zuri.team/'
          target='_blank'
          rel='noreferrer'
          id='btn__zuri'
        >
          <button>Zuri Team</button>
        </a>
      </div>
      <div className='bg-slate-200 my-3 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium hover:bg-slate-300'>
        <a
          href='http://books.zuri.team'
          target='_blank'
          rel='noreferrer'
          id='books'
        >
          <button>Zuri Books</button>
        </a>
      </div>
      <div className='bg-slate-200 my-3 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium hover:bg-slate-300'>
        <a
          href='https://books.zuri.team'
          target='_blank'
          rel='noreferrer'
          id='book__python'
        >
          <button>Python Books</button>
        </a>
      </div>
      <div className='bg-slate-200 my-3 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium hover:bg-slate-300'>
        <a
          href='https://background.zuri.team'
          target='_blank'
          rel='noreferrer'
          id='pitch'
        >
          <button>Background Check for Coders</button>
        </a>
      </div>
      <div className='bg-slate-200 my-3 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium hover:bg-slate-300'>
        <a
          href='https://books.zuri.team/design-rules'
          target='_blank'
          rel='noreferrer'
          id='book__design'
        >
          <button>Design Books</button>
        </a>
      </div>
    </div>
  )
}

export default Links
