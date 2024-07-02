import React from 'react'

const Header = () => {
  return (
    <header className='home-header text-center bg-blue-100'>
        <h2 className='text-2xl text-blue-600'>Welcome to Blogs</h2>
        <h1 className='text-3xl text-blue-800 mb-4'>
            
            <span className='ext-gray-300 font-bold'>“Khan</span><span className='ext-gray-300 font-bold'>”</span>

        </h1>
        <p className='text-gray-500 font-medium'>
        awesome place to make oneself <br /> productive and entertained through
        daily updates.        </p>
    </header>
  )
}

export default Header