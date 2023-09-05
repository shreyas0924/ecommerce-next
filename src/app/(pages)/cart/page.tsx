/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext, ProductType } from '../../context/CartContext'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import Link from 'next/link'
import { ChevronLeft, ChevronLeftSquare } from 'lucide-react'
import { Icons } from '@/components/icons'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Shell } from '@/components/ui/shell'

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [quantities, setQuantities] = useState<number[]>(cartItems.map(() => 1))
  const { toast } = useToast()
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, item, index) => acc + item.price * quantities[index],
      0
    )
    setTotal(newTotal)
  }, [cartItems, quantities])

  function handleRemove(item: ProductType) {
    const indexToRemove = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    )

    if (indexToRemove !== -1) {
      removeFromCart(item.id)

      setQuantities((prevQuantities) => {
        const newQuantities = [...prevQuantities]
        newQuantities.splice(indexToRemove, 1)
        return newQuantities
      })

      toast({ title: 'Removed from Cart' })
    }
  }
  const add = (index: number) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities]
      newQuantities[index] += 1
      return newQuantities
    })
  }

  const sub = (index: number) => {
    if (quantities[index] > 1) {
      setQuantities((prevQuantities) => {
        const newQuantities = [...prevQuantities]
        newQuantities[index] -= 1
        return newQuantities
      })
    }
  }

  return (
    <Shell>
      <Link href='/products' className='cursor-pointer'>
        <ChevronLeftSquare className='ml-6 w-7 h-7' />
      </Link>
      <div className='flex'>
        <div className=' text-xl ml-6 '>Shopping Cart</div>
        <div className=' ml-auto text-left text-xl'>Sub Total : ₹{total}</div>
      </div>
      <div className='flex flex-wrap mt-6 ml-2'>
        {cartItems.map((item, index) => (
          <div
            className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'
            key={item.id}
          >
            <Card className='w-full'>
              <CardHeader>
                <AspectRatio ratio={5 / 3}>
                  <CardTitle className='text-xl mb-5 line-clamp-1'>
                    {item.name}
                  </CardTitle>
                  <Link key={item.id} href={`/${item.name}`}>
                    {item.price ? (
                      <div className='w-24 h-24  ml-2'>
                        <img
                          className='object-cover'
                          loading='lazy'
                          src={item.image!}
                          alt='Product Image'
                        />
                      </div>
                    ) : (
                      <div
                        aria-label='Placeholder'
                        role='img'
                        aria-roledescription='placeholder'
                        className='flex h-full w-full items-center justify-center bg-secondary'
                      >
                        <Icons.placeholder
                          className='h-9 w-9 text-muted-foreground'
                          aria-hidden='true'
                        />
                      </div>
                    )}
                  </Link>
                </AspectRatio>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-lg mt-10 dark:text-white text-black '>
                  Price : ₹{item.price}
                </CardDescription>
              </CardContent>
              <div className='flex'>
                <Button className='m-4' onClick={() => handleRemove(item)}>
                  Remove
                </Button>

                <div className='flex gap-4 text-2xl ml-auto mr-5 mt-4'>
                  <Button variant='outline' onClick={() => sub(index)}>
                    -
                  </Button>
                  <CardDescription className='mt-3'>
                    {quantities[index]}
                  </CardDescription>
                  <Button variant='outline' onClick={() => add(index)}>
                    +
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <Toaster />
    </Shell>
  )
}

export default Cart
