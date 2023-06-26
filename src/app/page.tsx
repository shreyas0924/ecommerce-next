'use client'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState<number>(0)
  function increment() {
    setCount((prev) => prev + 1)
    if (count === 10) {
      setCount(0)
    }
  }
  return (
    <main>
      <div className='flex mt-6 justify-center align-middle'>
        <h1 className='text-2xl'>Ecommerce Application</h1>
        <Button
          variant='outline'
          onClick={increment}
          className='rounded-xl ml-5'
        >
          {count}
        </Button>
      </div>
    </main>
  )
}
