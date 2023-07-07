import prisma from '@/lib/prisma'
import Product from './components/Product'

// async function getUsers() {
//   const result = await prisma.user.findMany()
//   console.log(result)
// }

export default function Home() {
  // getUsers()
  return (
    <main>
      <div className='flex mt-6 justify-center align-middle'>
        <h1 className='text-2xl'>Ecommerce Application</h1>
      </div>
      <div>
        <Product
          product={{
            id: 1,
            name: 'Nike Air Max',
            price: 7999,
          }}
        />
      </div>
    </main>
  )
}
