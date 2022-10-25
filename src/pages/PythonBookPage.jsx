import React from 'react'
import Footer from '../components/Footer'

const PythonBookPage = () => {
  return (
    <>
      <div className='w-96 md:w-11/12 flex flex-col item-center py-24 px-8 gap-8 top-24  h-4/5 text-center'>
        <div className='w-96 md:w-11/12'>
          <h1 className=' h-3 md:h-16  font-semibold text-3xl mb-20 md:text-5xl leading-normal'>
            Zuri Tech Shelf
          </h1>
          <p className='text-slate-600 font-normal text-lg  leading-7  h-14 text-center'>
            Buy Programming books, read and invest in your future!
          </p>
        </div>

        <div className='bg-slate-200 my-3  drop-shadow font-medium rounded-lg text-center py-4 px-14 border h-14'>
          <a href=' http://books.zuri.team' target='blank'>
            <button>Python Books</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PythonBookPage
