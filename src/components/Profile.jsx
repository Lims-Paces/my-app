import React from 'react'
import profilePic from '../images/profile-img.svg'
import shareIcon from '../images/share-button-desktop.svg'
import shareIcon2 from '../images/share-button.svg'

const Profile = () => {
  return (
    <div className='flex'>
      <div className=''>
        <div className='mb-6'>
          <img src={profilePic} alt='Oluwafemi Joy' id='profile_img' />
        </div>
        <div>
          <p className='gap-0.5 top-7 font-extrabold' id='twitter'>
            JoyPaces
          </p>
        </div>
        {/* <div className="slack-name" id='slack'></div> */}
      </div>
      <div className='absolute -top-0.2 right-52 hidden md:block'>
        <img src={shareIcon} alt='' />
      </div>
      <div className='absolute -top-0.2 left-72 block md:hidden'>
        <img src={shareIcon2} alt='' />
      </div>
    </div>
  )
}

export default Profile
