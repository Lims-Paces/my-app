import React from 'react'
import Footer from '../components/Footer'

const Pitch = () => {
  return (
    <>
      <div className='w-96 md:w-11/12 flex flex-col item-center py-24 px-8 gap-8 top-24 left-20 h-4/5 text-center'>
        <div className='h-24 md:h-20'>
          <h1 className='h-3 md:h-16  font-semibold text-2xl md:text-4xl md:text-5xl leading-normal '>
            How good are you with codes?
          </h1>
          <p className='text-slate-600 font-normal text-lg  leading-7  h-14 mt-16  md:mt-0 '>
            Test your abilities, skills and strength.
          </p>
        </div>

        <div className='bg-slate-200 my-3 text-sm md:text-lg drop-shadow font-medium rounded-lg text-center py-4 px-14 border h-14  md:mt-16'>
          <a href=' https://books.zuri.team/design-rules' target='blank'>
            <button>Background Check For Coders</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Pitch
