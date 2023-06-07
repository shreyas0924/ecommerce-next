// import Navbar from './components/Navbar'
import './App.css'
import { useEffect, useState } from 'react'
import Product from './components/Product'
import Loading from './components/Loading'
import Layout from './layout'
function App() {
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
    <Layout>
      <div className='flex flex-wrap justify-center gap-5 m-6'>
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  )
}

export default App
