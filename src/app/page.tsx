import prisma from '@/lib/prisma'
import Product from './components/Product'
import getData from './api/products/route'

export default async function Home() {
  const data = await getData()

  return (
    <main>
      
      <div className='mt-5 flex gap-4'>
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
