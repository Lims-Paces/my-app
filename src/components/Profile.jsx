import React from 'react'
import profilePic from '../images/profile-img.svg'
import shareIcon from '../images/share-button-desktop.svg'

const Profile = () => {
  return (
    <div>
      <img src={profilePic} alt='Oluwafemi Joy' />
      <img src={shareIcon} alt='' />
    </div>
  )
}

export default Profile
