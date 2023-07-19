/* eslint-disable @next/next/no-img-element */

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { ChevronLeftSquare } from 'lucide-react'
import Link from 'next/link'
import { getProductByName } from '@/app/api/products'

type ProductDescriptionProps = {
  params: { name: string }
}

export default async function ProductDescription({
  params,
}: ProductDescriptionProps) {
  const { name } = params
  const product = await getProductByName(name)
  return (
    <>
      <Link href='/' className='cursor-pointer'>
        <ChevronLeftSquare className='ml-8 mt-5 w-7 h-7' />
      </Link>
      <Card className='mt-5 rounded-xl'>
        <div className='flex items-center justify-center dark:bg-black'>
          {product && (
            <div className='max-w-6xl mx-auto rounded-lg overflow-hidden my-8 flex'>
              <div className='w-1/2'>
                <img
                  src={product?.image ?? ''}
                  alt={product?.name ?? ''}
                  className='mt-8 w-[22rem] h-auto'
                />
              </div>
              <div className='p-6 w-1/2'>
                <CardTitle className='text-xl font-semibold mb-2'>
                  {product?.name ?? ''}
                </CardTitle>
                <CardDescription className='text-base mb-4 text-justify'>
                  {product?.description ?? ''}
                </CardDescription>
                <CardDescription className='font-bold text-base'>
                  Price: ₹{product?.price ?? ''}
                </CardDescription>
                <Button className='mt-5'>Add To Cart</Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </>
  )
}
