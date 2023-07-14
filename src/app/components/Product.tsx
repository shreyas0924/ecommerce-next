/* eslint-disable @next/next/no-img-element */
'use client'
import { useContext, useState } from 'react'
import { CartContext, ProductType } from '../context/CartContext'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import Image from 'next/image'

interface ProductProps {
  product: ProductType
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { addToCart, isInCart } = useContext(CartContext)
  const { toast } = useToast()
  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: 'Added To Cart',
    })
  }

  return (
    <>
      <div className='w-full sm:w-1/2 md:w-1/4 p-4 h-full '>
        <Card className='w-full border-gray-300 dark:border-gray-700 shadow-lg'>
          <CardHeader>
            <CardTitle className='text-xl mb-5'>{product.name}</CardTitle>
            <Link key={product.id} href={`/${product.name}`}>
              <img
                loading='lazy'
                src={product.image!}
                alt='Product Image'
                className='w-[50%] h-[60%] object-cover'
              />
            </Link>
          </CardHeader>
          <CardContent>
            {/* <CardDescription className='text-justify line-clamp-5 '>
              {product.description}
            </CardDescription> */}

            <CardDescription className='text-lg mt-3 dark:text-white text-black '>
              Price : ₹{product.price}
            </CardDescription>
          </CardContent>
          {isInCart(product) ? (
            <Button className='ml-4 mt-4 mb-4'>
              <Link href='../cart'>Go to Cart</Link>
            </Button>
          ) : (
            <Button className='ml-4 mt-4 mb-4' onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </Card>
      </div>
      <Toaster />
    </>
  )
}

export default Product
