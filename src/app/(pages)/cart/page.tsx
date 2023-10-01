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
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/ui/page-header'

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
    <Shell className=''>
      <Link href='/products' className='cursor-pointer'>
        <ChevronLeftSquare className='ml-8 w-7 h-7' />
      </Link>

      <PageHeader
        id='products-page-header'
        aria-labelledby='products-page-header-heading'
        className='ml-8 flex '
      >
        <PageHeaderHeading size='sm'>Shopping Cart</PageHeaderHeading>
        <PageHeaderDescription size='lg' className='ml-auto'>
          {`Sub Total : ₹ ${total}`}
        </PageHeaderDescription>
      </PageHeader>

      <div className='flex flex-wrap mt-6 ml-7 gap-4'>
        {cartItems.map((item, index) => (
          <div className='w-full sm:w-1/2 md:w-1/4 p-3' key={item.id}>
            <Card className='w-full h-full border-gray-300 dark:border-gray-700 shadow-lg flex-col dark:bg-[#151e34]'>
              <CardHeader>
                <AspectRatio ratio={5 / 4}>
                  <CardTitle className='text-lg my-4 mx-2 ml-5 line-clamp-1'>
                    {item.name}
                  </CardTitle>
                  <Link key={item.id} href={`/${item.name}`}>
                    {/* {product.price ? (
                  <div className='w-24 h-24  ml-2'>
                    <img
                      className='object-fill'
                      loading='lazy'
                      src={product.image!}
                      alt='Product Image'
                    />
                  </div>
                ) : ( */}
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
                    {/* )} */}
                  </Link>
                </AspectRatio>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-lg dark:text-white text-black mt-20 '>
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

      <Button className='w-1/5 ml-auto' disabled={cartItems.length === 0}>
        Checkout
      </Button>

      <Toaster />
    </Shell>
  )
}

export default Cart
