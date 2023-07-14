import prisma from '@/lib/prisma'
import Product from './components/Product'
import getData from './api/products'
import Link from 'next/link'

export default async function Home() {
  const data = await getData()

  return (
    <main>
      <div className='mt-8 ml-4 mr-4 flex flex-wrap '>
        {data.map((item) => {
          return (
            <Product
              key={item.id}
              product={{
                id: item.id,
                name: item.name,
                price: item.price,
                description: item.description,
                image: item.image,
              }}
            />
          )
        })}
      </div>
    </main>
  )
}
