'use client'
import { ThemeToggle } from '@/components/theme-toggle'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

function Navbar() {
  const { user } = useUser()
  return (
    <div className='flex  sticky top-0 z-10 font-mono'>
      <Link href='/' className='flex-1 text-3xl   m-5 ml-6 cursor-pointer  '>
        <h1>amazon.in</h1>
      </Link>
      <div className=' mt-[1.4rem] mr-6 text-[20px] '>
        Welcome {user?.firstName}
      </div>
      <ThemeToggle />
      <div className='flex '>
        <Link
          href='/cart'
          className='text-2xl  text-end mr-6 mt-5 cursor-pointer  ml-5'
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
