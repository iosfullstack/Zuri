import React from 'react'
import Zuri from '../../Images/I4G.png'
import Dot from '../../Images/Vector (8).png'

const Footer = () => {
  return (
    <div className='footer flex flex-row justify-around items-center mt-28 border-t-2 p-8 mr-14 ml-14'>
        <div className="zuri flex flex-row items-center gap-1">
            <p>Zuri</p>
            <img className='mt-1' src={Dot} alt="dot" />
            <p>Internship</p>
        </div>
        <p className='hng'>HNG Internship 9 Frontend Task</p>
        <img src={Zuri} alt="i4G" />
    </div>
  )
}

export default Footer