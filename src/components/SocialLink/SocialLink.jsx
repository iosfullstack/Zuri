import React from 'react'

const SocialLink = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
        <a className='flex justify-center items-center' id='twitter' href="http://twitter.com/ios_py">Twitter Link</a>
        <a className='flex justify-center items-center' id='btn__zuri' href="https://training.zuri.team/">Zuri Team</a>
        <a className='flex justify-center items-center' id='books' href="http://books.zuri.team">Zuri Books</a>
        <a className='flex justify-center items-center' id='book_python' href="https://books.zuri.team/">Python Books</a>
        <a className='flex justify-center items-center' id='pitch' href="https://background.zuri.team">Background Check for Coders</a>
        <a className='book flex justify-center items-center' id='book_design' href="http://books.zuri.team/design-rules">Design Books</a>
    </div>
  )
}

export default SocialLink