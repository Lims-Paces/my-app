import React from 'react'
import Footer from './Footer'

const Error = () => {
  return (
    <>
      <div className='w-96 md:w-11/12 flex flex-col item-center py-24 px-8 gap-8 top-24 left-20 h-4/5'>
        <div className='h-24 md:h-20'>
          <p className=' font-semibold text-base w-80 leading-6 text-violet-600 md:w-1/2'>
            404 error
          </p>
          <h1 className='h-3 md:h-16  font-semibold text-4xl md:text-5xl leading-normal '>
            We can't find that page
          </h1>
        </div>

        <p className='text-slate-600 font-normal text-lg  leading-7 hidden md:block h-14'>
          Sorry, the page you are looking for does not exist
        </p>

        <p className='text-slate-600 font-normal text-lg  leading-7 block md:hidden mt-4'>
          Sorry, the page you are looking for does not exist or has been moved
        </p>

        <div className='flex flex-col md:flex-row gap-3'>
          <div className='rounded-lg text-center py-4 px-14 border shadow-black h-14 hidden md:block'>
            <a href='#'>Go back</a>
          </div>
          <div className='py-4 px-6 text-white bg-violet-600 rounded-lg text-center'>
            <a href='#'>Take me home</a>
          </div>
          <div className='rounded-lg text-center py-4 px-14 border shadow-black h-14 md:hidden mt-4'>
            <a href='#'>Go back</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Error
