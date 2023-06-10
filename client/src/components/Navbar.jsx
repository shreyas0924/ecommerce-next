// import React from 'react'

import { UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { user } = useUser()
  return (
    <div className='flex bg-[#131921] sticky top-0 z-10'>
      <Link
        to='/'
        className='flex-1 text-3xl text-gray-200 m-4 ml-6 cursor-pointer hover:text-blue-300 '
      >
        <h1>amazon.in</h1>
      </Link>
      <div className='text-gray-200 mt-5 mr-6 text-[20px] '>
        Welcome {user.username}
      </div>
      <div className='flex '>
        <Link
          to='/cart'
          className='text-2xl text-gray-200 text-end mr-6 mt-5 cursor-pointer hover:text-blue-300 ml-5'
        >
          Cart
        </Link>
      </div>
      <div className='mt-5 mr-4 ml-5'>
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar
