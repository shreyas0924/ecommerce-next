import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext)

  return (
    <div className='cart'>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className='card rounded-md min-w-[40%] m-4 shadow-md bg-gray-400 text-gray-800 item'
        >
          <div className='p-4 text-gray-800 text-left'>
            <h1 className='text-xl font-semibold'>{item.name}</h1>
            <p className=' text-sm'>₹{item.price}</p>
            <p className='text-sm'>Category: {item.category}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className='mt-4 bg-black text-white py-2 px-4 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out block w-full'
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart
