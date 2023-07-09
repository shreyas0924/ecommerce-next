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
import { useLocalStorage } from './useLocalStorage'

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + item.price, 0)
    setTotal(newTotal)
  }, [cartItems, setTotal])

  function handleRemove(item: ProductType) {
    removeFromCart(item.id)
    setTotal((prev) => prev - item.price)
  }

  return (
    <>
      <h1 className=' text-2xl ml-4 mt-5'>Shopping Cart</h1>
      <div className='flex mt-6'>
        {cartItems.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
            <Card className='w-full'>
              <CardHeader>
                <CardTitle className='text-xl'>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
                <CardDescription className='text-lg'>
                  ₹{item.price}
                </CardDescription>
              </CardContent>
              <Button
                className='ml-4 mt-4 mb-4'
                onClick={() => handleRemove(item)}
              >
                Remove
              </Button>
            </Card>
          </div>
        ))}
      </div>
      <div className='p-4  text-left text-xl'>Sub Total : {total}</div>
    </>
  )
}

export default Cart
