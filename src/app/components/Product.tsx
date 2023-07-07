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

interface ProductProps {
  product: ProductType
}

const Product: React.FC<ProductProps> = ({ product }) => {
  //   const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    //     addToCart(product)
    toast('Added to Cart')
  }

  return (
    <>
      <div>
        <Card key={product.id} className='w-[20%]'>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription> Description</CardDescription>
            <CardDescription>₹{product.price}</CardDescription>
          </CardContent>
          <Button className='ml-4  mb-4' onClick={handleAddToCart}>
            Add to Cart
          </Button>
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
