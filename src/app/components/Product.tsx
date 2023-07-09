'use client'
import { useContext } from 'react'
import { CartContext, ProductType } from '../context/CartContext'
import toast, { Toaster } from 'react-hot-toast'

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

interface ProductProps {
  product: ProductType
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { addToCart, isInCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart(product)
    toast('Added to Cart')
  }

  const handleGoToCart = () => {}
  return (
    <>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
        <Card className='w-full'>
          <CardHeader>
            <CardTitle className='text-xl'>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{product.description}</CardDescription>
            <CardDescription className='text-lg'>
              ₹{product.price}
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

      <Toaster
        position='bottom-center'
        toastOptions={{
          className: '',
          duration: 2000,
          style: {
            background: 'rgb(55 65 81)',
            color: '#fff',
          },
        }}
      />
    </>
  )
}

export default Product
