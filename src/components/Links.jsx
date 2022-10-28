import React from 'react'

const Links = () => {
  return (
    <div className='w-10/12 flex flex-col'>
      <div className='bg-slate-200 my-3 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium hover:bg-slate-300'>
        <a href='https://twitter.com/JoyPaces' target='_blank' rel='noreferrer'>
          Twitter Link
        </a>
      </div>
      <div className='bg-slate-200 my-3 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium hover:bg-slate-300'>
        <a
          href='https://training.zuri.team/'
          target='_blank'
          rel='noreferrer'
          id='btn__zuri'
        >
          Zuri Team
        </a>
      </div>
      <div className='bg-slate-200 my-3 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium hover:bg-slate-300'>
        <a
          href='http://books.zuri.team'
          target='_blank'
          rel='noreferrer'
          id='books'
        >
          Zuri Books
        </a>
      </div>
      <div className='bg-slate-200 my-3 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium hover:bg-slate-300'>
        <a
          href='https://books.zuri.team'
          target='_blank'
          rel='noreferrer'
          id='book__python'
        >
          Python Books
        </a>
      </div>
      <div className='bg-slate-200 my-3 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium hover:bg-slate-300'>
        <a
          href='https://background.zuri.team'
          target='_blank'
          rel='noreferrer'
          id='pitch'
        >
          Background Check for Coders
        </a>
      </div>
      <div className='bg-slate-200 my-3 flex items-center justify-center rounded-lg border border-solid py-6 drop-shadow font-medium hover:bg-slate-300'>
        <a
          href='https://books.zuri.team/design-rules'
          target='_blank'
          rel='noreferrer'
          id='book__design'
        >
          Design Books
        </a>
      </div>
    </div>
  )
}

export default Links
