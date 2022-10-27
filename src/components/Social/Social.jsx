import React from 'react'
import Slack from '../../Images/slack.png'
import Github from '../../Images/Social icon.png'

const Social = () => {
  return (
    <div className='social flex flex-row justify-center items-center mt-12 gap-6'>
        <a href="@IOS"><img src={Slack} alt="slack" /></a>
        <a href="http://github/iosfullstack"><img src={Github} alt="github" /></a>
    </div>
  )
}

export default Social