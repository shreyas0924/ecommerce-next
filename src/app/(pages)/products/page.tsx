import getData from '@/app/api/products'
import Product from '@/app/components/Product'
import Loading from '@/app/loading'
import React, { Suspense } from 'react'

const Products = async () => {
  const data = await getData()
  return (
    <div className='mt-4 ml-4 mr-4 flex flex-wrap '>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </div>
  )
}

export default Products
