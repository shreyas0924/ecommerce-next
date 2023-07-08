import prisma from '@/lib/prisma'
import Product from './components/Product'
import getData from './api/products'

export default async function Home() {
  const data = await getData()

  return (
    <main>
      <div className='flex mt-6 justify-center align-middle'>
        <h1 className='text-2xl'>Ecommerce Application</h1>
      </div>
      <div>
        {data.map((item) => {
          return (
            <Product
              key={item.id}
              product={{
                id: item.id,
                name: item.name,
                price: item.price,
                description: item.description,
              }}
            />
          )
        })}
      </div>
    </main>
  )
}
