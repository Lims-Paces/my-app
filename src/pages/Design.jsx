import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Icons from '../components/Icons'

const Design = () => {
  return (
    <>
      <div className='w-96 md:w-11/12 flex flex-col item-center py-24 px-8 gap-8 top-24 left-20 h-4/5 text-center'>
        <div className='h-24 md:h-20'>
          <h1 className='h-3 md:h-16  font-semibold text-4xl md:text-5xl leading-normal '>
            Get free books!
          </h1>
          <p className='text-slate-600 font-normal text-lg  leading-7  h-14 mt-12 md:mt-0'>
            Enlighten yourself. Get Zuri's free book on Design Rules.
          </p>
        </div>

        <div className='bg-slate-200 my-3  drop-shadow font-medium rounded-lg text-center py-4 px-14 border h-14 hover:bg-slate-300'>
          <a href=' https://books.zuri.team/design-rules' target='blank'>
            <button>Design Books</button>
          </a>
        </div>
        <div className='bg-slate-200 my-3  drop-shadow font-medium rounded-lg text-center py-4 px-14 border h-14 hover:bg-slate-300'>
          <Link to='/'>Take me home</Link>
        </div>
      </div>
      <Icons />
      <Footer />
    </>
  )
}

export default Design
