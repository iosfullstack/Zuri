import React from 'react'
import Pic from '../../Images/profile__img.png'
import Share from '../../Images/Content.png'
import Shared from '../../Images/_Avatar share button.png'


const Profile = () => {
  return (
    <div>
        <header className='flex justify-center mt-36'>
            <div className="profile flex flex-col justify-center items-center">
                <img id='profile__img' src={Pic} alt="profile" />
                <p className='mt-5 mb-10'>Annette Black</p>
            </div>
            <a className='share flex justify-center items-center' href="http://"><img src={Share} alt="share" /></a>
            <a className='shared flex justify-center items-center' href="http://"><img src={Shared} alt="share" /></a>
        </header>
    </div>
  )
}

export default Profile