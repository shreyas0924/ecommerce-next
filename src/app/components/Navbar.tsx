'use client'
import { ThemeToggle } from '@/components/theme-toggle'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

function Navbar() {
  const { user } = useUser()
  return (
    <div className='flex  sticky top-0 z-10 font-mono'>
      <Link href='/' className='flex-1 text-3xl   m-5 ml-6 cursor-pointer  '>
        <h1>shopwise.com</h1>
      </Link>
      <div className=' mt-[1.5rem] mr-6 text-[20px] '>
        Welcome {user?.firstName}
      </div>
      <ThemeToggle />
      <div className='flex '>
        <Link
          href='/cart'
          className='text-2xl  text-end mr-6 mt-7 cursor-pointer  ml-5'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-shopping-cart'
          >
            <circle cx='8' cy='21' r='1' />
            <circle cx='19' cy='21' r='1' />
            <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
          </svg>
        </Link>
      </div>
      <div className='mt-6 mr-4 ml-5'>
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar
