import React from 'react'
import profilePic from '../images/profile-img.svg'
import shareIcon from '../images/share-button-desktop.svg'

const Profile = () => {
  return (
    <div>
      <div className='profile'>
        <img src={profilePic} alt='Oluwafemi Joy' id='profile_img' />
        <p className='username' id='twitter'>
          JoyPaces
        </p>
        {/* <div className="slack-name" id='slack'></div> */}
      </div>

      <img src={shareIcon} alt='' />
    </div>
  )
}

export default Profile
