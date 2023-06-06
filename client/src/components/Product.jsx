/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div
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
    </div>
  )
}

export default Product
