import Footer from './Footer'

import React from 'react'

const Contact = () => {
  const name = 'Joy'
  return (
    <>
      <div className='md:w-[45rem]'>
        <header className='flex flex-col gap-8 items-start py-0 px-4 w-[23.44rem] md:w-[45rem] h-[7.25rem] '>
          <h1 className='font-semibold text-3xl leading-[2.8rem] tracking-[-0.02em] text-[#101828]'>
            Contact Me
          </h1>

          <p className='font-normal text-lg leading-7'>
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </header>

        <main className='flex flex-col items-start px-4 gap-12  h-[37rem] my-12  md:w-[45rem]'>
          <form className='gap-8  h-5 '>
            <div className='md:flex gap-6'>
              <div>
                <label>First Name</label>
                <input

                  type='text'
                  placeholder='Enter your first name'
                  id='first_name'
Required
                  className='flex flex-row items-center mb-6 py-[0.63rem] px-[0.88rem] w-[21.44rem] h-[2.8rem] bg-[#FFFFFF] border-[1px] border-solid border-[#D0D5DD] rounded-lg text-[#667085]'
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type='text'
                  placeholder='Enter your last name'
                  id='last_name'
Required
                  className='flex flex-row items-center mb-6 py-[0.63rem] px-[0.88rem] w-[21.44rem] h-[2.8rem] bg-[#FFFFFF] border-[1px] border-solid border-[#D0D5DD] rounded-lg text-[#667085]'
                />
              </div>
            </div>
            <div className='mb-4 text-[#475467]'>
              <label>Email</label>
              <input
                type='email'
                placeholder='yourname@gmail.com'
                id='email'
Required
                className='flex flex-row items-center mb-2 py-[0.63rem] px-[0.88rem] w-full h-[2.8rem] bg-[#FFFFFF] border-[1px] border-solid border-[#D0D5DD] rounded-lg  focus:outline-none focus:border-sky-500 invalid:border-pink-500   focus:ring-1 focus:ring-sky-500    focus:invalid:ring-pink-500 invalid:border-pink-500 text-[#667085]'
              />
              <span className='text-[#475467]'>
                This is a hint text to help user.
              </span>
            </div>
            <div className='mb-[24px]'>
              <label>Message</label>
              <textarea
                id='message'
Required
                className='resize-none flex flex-row items-center py-[0.63rem] leading-6 px-[0.88rem] w-full bg-[#FFFFFF] border-[1px] border-solid border-[#D0D5DD]  focus:outline-none focus:border-sky-500 rounded-lg   focus:ring-1 focus:ring-sky-500 text-[#667085] h-[8.3rem] shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)] invalid:border-pink-500 focus:invalid:ring-pink-500 focus:invalid:border-pink-500   mb-2'
              >
                Send me a message and I&#180;ll reply you as soon as possible...
              </textarea>
              <span className='text-[#475467]'>
                Please enter a message
              </span>
            </div>
            <div className='flex p-0 gap-3 h-12 mb-8'>
              <input
                type='checkbox'
                className='flex items-center justify-center pt-1 w-5 h-5 bg-[#FFFFFF] border-[1px] border-solid border-[#D0D5DD]-300 dark:border-gray-600 rounded-md'
              />
              <label className='flex flex-col items-start gap-[2px] font-normal text-base leading-6 text-[#475467] w-[19.44rem] pr-2 md:w-full'>
                You agree to providing your data to {name} who may contact you.
              </label>
            </div>
            <button
              id='btn__submit'
              className='flex justify-center items-center py-[12px] px-[20px] bg-[#1570EF] text-[#ffffff] border-[1px] border-solid border-[#1570EF] rounded-lg shadow-[0px 1px 2px rgba(16, 24, 40, 0.05) mb-16] w-full hover:bg-[#175CD3] focus:bg-[#1570EF] disabled:bg-[#B2DDFF] disabled:text-[#101828]'
            >
              Send message
            </button>
          </form>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Contact

// const Contact = () => {
//   const name = 'Joy'
//   return (
//     <div>
//       <header className='flex flex-col gap-8 items-start py-0 px-4 w-[23.44rem] h-[7.25rem]'>
//         <h1 className='font-semibold text-3xl leading-[2.8rem] tracking-[-0.02em] text-[#101828]'>
//           Contact Me
//         </h1>
//         <p className='font-normal text-lg leading-7'>
//           Hi there, contact me to ask me about anything you have in mind.
//         </p>
//       </header>

//       <main className='flex flex-col items-start px-4 gap-12  h-[37rem] my-12'>
//         <form className='gap-8  h-5 mb-6'>
//           <p className='gap-1.5 text-sm leading-5 font-medium text-[#344054] mb-[0.38rem]'>
//             First name
//           </p>
//           <input
//             type='text'
//             placeholder='Enter your first name'
//             id='first_name'
//             className='flex flex-row items-center py-[0.63rem] px-[0.88rem] w-[21.44rem] h-[2.8rem] bg-[#FFFFFF] border-[1px] border-solid border-[#D0D5DD] rounded-lg text-[#667085]'
//           />
//         </form>
//         <form className='gap-8 w-[4.44rem] h-5 mb-6'>
//           <p className='gap-1.5 text-sm leading-5 font-medium text-[#344054] mb-[0.38rem]'>
//             Last name
//           </p>
//           <input
//             type='text'
//             placeholder='Enter your last name'
//             id='last_name'
//             className='flex flex-row items-center py-[0.63rem] px-[0.88rem] w-[21.44rem] h-[2.8rem] bg-[#FFFFFF] border-[1px] border-solid border-[#D0D5DD] rounded-lg text-[#667085]'
//           />
//         </form>
//         <form className='gap-8 w-[4.44rem] h-5 mb-6'>
//           <p className='gap-1.5 text-sm leading-5 font-medium text-[#344054] mb-[0.38rem]'>
//             Email
//           </p>
//           <input
//             type='email'
//             placeholder='yourname@gmail.com'
//             id='email'
//             className='flex flex-row items-center py-[0.63rem] px-[0.88rem] w-[21.44rem] h-[2.8rem] bg-[#FFFFFF] border-[1px] border-solid border-[#D0D5DD] rounded-lg text-[#667085]'
//           />
//         </form>
//         <form className='gap-8 w-[4.44rem] h-5 mb-8'>
//           <p className='gap-1.5 text-sm leading-5 font-medium text-[#344054] mb-[0.38rem] '>
//             Message
//           </p>
//           <textarea
//             id='message'
//             className='resize-none flex flex-row items-center py-[0.63rem] leading-6 px-[0.88rem] w-[21.44rem] bg-[#FFFFFF] border-[1px] border-solid border-[#D0D5DD] rounded-lg text-[#667085] h-[8.3rem] shadow-[0px 1px 2px rgba(16, 24, 40, 0.05)]'
//           >
//             Send me a message and I&#180;ll reply you as soon as possible...
//           </textarea>
//         </form>
//         <br />

//         <form className='flex items-start p-0 gap-3 h-12'>
//           <input
//             type='checkbox'
//             className='flex items-center justify-center pt-1 w-5 h-5 bg-[#FFFFFF] border-[1px] border-solid border-[#D0D5DD]-300 dark:border-gray-600 rounded-md'
//           />
//           <label className='flex flex-col items-start gap-[2px] font-normal text-base leading-6 text-[#475467] w-[19.44rem] pr-2'>
//             You agree to providing your data to {name} who may contact you.
//           </label>
//         </form>
//         <div className='flex justify-center items-center'>
//           <button
//             id='btn__submit'
//             className='flex justify-center items-center py-[12px] px-[20px] bg-[#1570EF] text-[#ffffff] border-[1px] border-solid border-[#1570EF] rounded-lg shadow-[0px 1px 2px rgba(16, 24, 40, 0.05) mb-16]'
//           >
//             Send message
//           </button>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   )
// }

// export default Contact

// import React from 'react'
// import { useState } from 'react'
// import FormInput from './FormInput'
// import Footer from './Footer'

// const messagePlaceholder = React.createElement(
//   'p',
//   {},
//   'Send me a message and I&#180;ll reply you as soon as possible...'
// )

// function Contact() {
//   const [values, setValues] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     message: '',
//   })

//   const inputs = [
//     {
//       id: 'first_name',
//       name: 'firstname',
//       placeholder: 'Enter your first name',
//       errorMessage: '',
//       label: 'First name',
//     },
//     {
//       id: 'last_name',
//       name: 'lastname',
//       placeholder: 'Enter your last name',
//       errorMessage: '',
//       label: 'Last name',
//     },
//     {
//       id: 'email',
//       name: 'email',
//       type: 'email',
//       placeholder: 'yourname@email.com',
//       errorMessage: 'input a valid email',
//       label: 'Email',
//       pattern: 'yourname@email.com',
//       required: true,
//     },
//     {
//       id: 'message',
//       name: 'message',
//       placeholder: `${messagePlaceholder}`,
//       errorMessage: 'Please enter a message',
//       label: 'Message',
//     },
//   ]

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const data = new FormData(e.target)
//     console.log(Object.fromEntries(data.entries()))
//   }

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value })
//   }

//   console.log(values)

//   return (
//     <div>
//       <header className='flex flex-col gap-8 items-start py-0 px-4 w-[23.44rem] h-[7.25rem]'>
//         <h1 className='font-semibold text-3xl leading-[2.8rem] tracking-[-0.02em] text-[#101828]'>
//           Contact Me
//         </h1>

//         <p className='font-normal text-lg leading-7'>
//           Hi there, contact me to ask me about anything you have in mind.
//         </p>
//       </header>

//       <main className='flex flex-col items-start px-4 gap-12  h-[37rem] my-12'>
//         <form onSubmit={handleSubmit} className='gap-8  h-5 '>
//           {inputs.map((input) => (
//             <FormInput
//               key={input.id}
//               {...input}
//               value={values[input.name]}
//               onChange={onChange}
//               className='flex flex-row items-center mb-6 py-[0.63rem] px-[0.88rem] w-[21.44rem] h-[2.8rem] bg-[#FFFFFF] border-[1px] border-solid border-[#D0D5DD] rounded-lg text-[#667085]'
//             />
//           ))}

//           <button
//             id='btn__submit'
//             className='flex justify-center items-center py-[12px] px-[20px] bg-[#1570EF] text-[#ffffff] border-[1px] border-solid border-[#1570EF] rounded-lg shadow-[0px 1px 2px rgba(16, 24, 40, 0.05) mb-16] w-full'
//           >
//             Send message
//           </button>
//         </form>
//       </main>

//       <Footer />
//     </div>
//   )
// }

// export default Contact
