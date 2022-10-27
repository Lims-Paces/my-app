import React from 'react'
import profilePic from '../images/profile-img.svg'
import shareIcon from '../images/share-button-desktop.svg'
import shareIcon2 from '../images/share-button.svg'

const Profile = () => {
  return (
    <section className='flex'>
      <div className='w-10/12 relative'>
        <div className='mb-6'>
          <img src={profilePic} alt='Oluwafemi Joy' id='profile_img' />
        </div>
        <div>
          <p className='gap-0.5 top-7 font-extrabold' id='twitter'>
            JoyPaces
          </p>
        </div>
        {/* <div id='slack'>JoyPaces</div> */}
      </div>
      <div className='absolute top-10 hidden md:right-44 xl:right-64 md:block'>
        <img src={shareIcon} alt='' />
      </div>
      <div className='absolute top-12 right-8 block md:hidden'>
        <img src={shareIcon2} alt='' />
      </div>
    </section>
  )
}

export default Profile
