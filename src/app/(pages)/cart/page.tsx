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
    <>
      <Link href='/' className='cursor-pointer'>
        <ChevronLeftSquare className='ml-6 mt-5 w-7 h-7' />
      </Link>
      <h1 className=' text-2xl ml-6 mt-5'>Shopping Cart</h1>
      <div className='flex flex-wrap mt-6 ml-2'>
        {cartItems.map((item, index) => (
          <div
            className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'
            key={item.id}
          >
            <Card className='w-full'>
              <CardHeader>
                <CardTitle className='text-xl'>{item.name}</CardTitle>
                <Link key={item.id} href={`/${item.name}`}>
                  <div className='w-20 object-fill ml-2'>
                    <img
                      loading='lazy'
                      src={item.image!}
                      alt='Product Image'
                    />
                  </div>
                </Link>
              </CardHeader>
              <CardContent>
                {/* <CardDescription className='text-justify line-clamp-5 '>
                  {item.description}
                </CardDescription> */}

                <CardDescription className='text-lg mt-3 dark:text-white text-black '>
                  Price : ₹{item.price}
                </CardDescription>
              </CardContent>
              <div className='flex'>
                <Button
                  className='m-4'
                  onClick={() => handleRemove(item)}
                >
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
      <div className='p-4 ml-3 text-left text-xl'>Sub Total : ₹{total}</div>

      <Toaster />
    </>
  )
}

export default Cart
