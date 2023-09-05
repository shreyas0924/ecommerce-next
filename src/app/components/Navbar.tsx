'use client'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  SignInButton,
  SignOutButton,
  UserButton,
  redirectToSignIn,
  useUser,
} from '@clerk/nextjs'
import Link from 'next/link'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

import { Button } from '@/components/ui/button'
import Loading from '../loading'
import { Shell } from '@/components/ui/shell'

function Navbar() {
  const { user, isSignedIn, isLoaded } = useUser()
  const { cartCounter } = useContext(CartContext)
  if (!isLoaded) return <div />
  return (
    <header className='border-b '>
      <Shell variant='default'>
        <div className='flex flex-wrap sticky top-0 z-20 font-sans md:ml-2 dark:bg-[#030711] bg-white '>
          <Link href='/' className='flex mr-5 text-3xl  cursor-pointer mb-2 '>
            shopwise.com
          </Link>

          <div className='md:ml-auto mr-4 text-[20px] '>
            Welcome {user?.firstName} {user?.lastName}
          </div>
          <ThemeToggle />
          <div className='flex relative flex-wrap'>
            <Link
              href='/cart'
              className='text-2xl text-end mr-4 mt-2 cursor-pointer ml-5'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-shopping-cart'
              >
                <circle cx={8} cy={21} r={1} />
                <circle cx={19} cy={21} r={1} />
                <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
              </svg>
            </Link>
            <span className='absolute right-3 -top-1 rounded-full w-4 h-4 top right p-0 m-0 font-mono text-sm leading-tight text-center'>
              {cartCounter}
            </span>
          </div>
          <div className='md:mt-1 ml-3'>
            <UserButton />
          </div>
        </div>
      </Shell>
    </header>
  )
}

export default Navbar
