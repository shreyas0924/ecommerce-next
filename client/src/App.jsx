// import Navbar from './components/Navbar'
import './App.css'
import { useEffect, useState } from 'react'
import Product from './components/Product'
import Loading from './components/Loading'
import Layout from './layout'
import { ChakraProvider } from '@chakra-ui/react'
// import {
//   Button,
//   ButtonGroup,
//   Card,
//   CardBody,
//   CardFooter,
//   Divider,
//   Heading,
//   Image,
//   Stack,
//   Text,
// } from '@chakra-ui/react'
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
      <ChakraProvider>
        <div className='flex flex-wrap justify-center gap-5 m-6'>
          {data.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </ChakraProvider>
    </Layout>
  )
}

export default App
