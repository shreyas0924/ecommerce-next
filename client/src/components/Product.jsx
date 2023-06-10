/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import toast, { Toaster } from 'react-hot-toast'

import {
  Button,
  ButtonGroup,
  Card,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart(product)
    toast('Added to Cart')
  }

  return (
    <>
      {/* <div
        key={product.id}
        className='card rounded-md min-w-[40%] m-4 shadow-md bg-gray-400 text-gray-800 product'
      >
        <div className='p-4 text-gray-800 text-left'>
          <h1 className='text-xl font-semibold'>{product.name}</h1>
          <p className=' text-sm'>₹{product.price}</p>
          <p className='text-sm'>Category: {product.category}</p>
          <button
            onClick={handleAddToCart}
            className='mt-4 bg-black text-white py-2 px-4 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out block w-full'
          >
            Add to Cart
          </button>
        </div>
      </div> */}
      <div>
        <Card
          maxW='sm'
          className='m-4 shadow-md bg-gray-400 text-gray-800 product'
          key={product.id}
        >
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3' p={4} textAlign='left'>
            <Heading size='md'>{product.name}</Heading>
            <Text>
              Description
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              ₹{product.price}
            </Text>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
              <Button
                variant='ghost'
                colorScheme='blue'
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>
            </ButtonGroup>
          </Stack>
        </Card>
      </div>
      <Toaster
        position='bottom-center'
        toastOptions={{
          // Define default options
          className: '',
          duration: 2000,
          style: {
            background: 'rgb(55 65 81)',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 2000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </>
  )
}

export default Product
