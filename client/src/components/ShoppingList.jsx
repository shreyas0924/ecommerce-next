import { useEffect, useState } from 'react'
import Loading from './Loading'

function ShoppingList() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/products')
      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }

  if (!data) {
    return (
      <div>
        <Loading />
      </div>
    )
  }
  return (
    <div>
      <section className='flex flex-wrap justify-center gap-5 m-6'>
        {data.map((prod) => (
          // eslint-disable-next-line react/jsx-key
          <div className='card rounded-md overflow-hidden shadow-md bg-gray-400 text-gray-800'>
            {/* <img src={prod.image} alt={prod.name} className='w-full h-48 object-cover' /> */}
            <div className='p-4 text-gray-800'>
              <h1 className='text-xl font-semibold'>{prod.name}</h1>
              <p className=' text-sm'>₹{prod.price}</p>
              <p className='text-sm'>Category: {prod.category}</p>
              <button className='mt-4 bg-black text-white py-2 px-4 rounded-md hover:opacity-75 transition-opacity duration-300 ease-in-out block w-full'>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default ShoppingList
