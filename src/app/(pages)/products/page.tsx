import getData from '@/app/api/products'
import Product from '@/app/components/Product'
import Loading from '@/app/loading'
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/ui/page-header'
import { Shell } from '@/components/ui/shell'
import React, { Suspense } from 'react'

const Products = async () => {
  const data = await getData()
  return (
    <Shell as='div'>
      <PageHeader
        id='products-page-header'
        aria-labelledby='products-page-header-heading'
        className='ml-8'
      >
        <PageHeaderHeading size='sm'>Products</PageHeaderHeading>
        <PageHeaderDescription size='sm'>
          Buy products from our stores
        </PageHeaderDescription>
      </PageHeader>
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
    </Shell>
  )
}

export default Products
