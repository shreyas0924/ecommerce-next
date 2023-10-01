/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useContext } from 'react'
import { CartContext, ProductType } from '../context/CartContext'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Icons } from '@/components/icons'
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
      <div className='w-full sm:w-1/2 md:w-1/4 p-3 '>
        <Card className='w-full h-full border-gray-300 dark:border-gray-700 shadow-lg flex-col dark:bg-[#151e34]'>
          <CardHeader>
            <AspectRatio ratio={5 / 4}>
              <CardTitle className='text-lg my-4 mx-2 ml-5 line-clamp-1'>
                {product.name}
              </CardTitle>
              <Link key={product.id} href={`/${product.name}`}>
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
          <div className='align-bottom mt-20'>
            <CardContent>
              <CardDescription className='text-lg dark:text-white text-black '>
                Price : ₹{product.price}
              </CardDescription>
            </CardContent>
            {isInCart(product) ? (
              <Button className='my-4 mx-6 align-bottom'>
                <Link href='../cart'>Go to Cart</Link>
              </Button>
            ) : (
              <Button className='my-4 mx-6' onClick={handleAddToCart}>
                Add to Cart
              </Button>
            )}
          </div>
        </Card>
      </div>
      <Toaster />
    </>
  )
}

export default Product
