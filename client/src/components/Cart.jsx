import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import Layout from '../layout'

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + item.price, 0) //acc is 0 initially then acc will be the price whenver added
    setTotal(newTotal)
  }, [cartItems])

  function handleRemove(item) {
    removeFromCart(item.id)
    setTotal((prev) => prev - item.price)
  }

  return (
    <Layout className='cart'>
      <h1 className='text-gray-200 text-2xl ml-4 mt-5'>Shopping Cart</h1>
      <div>
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
                onClick={() => handleRemove(item)}
                className='mt-4 bg-black text-white py-2 px-4 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out block w-full'
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='p-4 text-gray-200 text-left text-xl'>
        Sub Total : {total}
      </div>
    </Layout>
  )
}

export default Cart
