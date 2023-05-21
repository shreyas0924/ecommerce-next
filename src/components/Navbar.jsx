// import React from 'react'

const Navbar = () => {
  return (
    <div className='flex'>
      <h1 className='flex-1 text-3xl text-gray-200 m-4 ml-6'>Shopify</h1>

      <button className='text-3xl text-gray-200 text-end m-4 mr-6 cursor-pointer hover:text-blue-300'>
        Cart
      </button>
    </div>
  )
}

export default Navbar
