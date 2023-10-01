/* eslint-disable @next/next/no-img-element */

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { ChevronLeftSquare } from 'lucide-react'
import Link from 'next/link'
import { getProductByName } from '@/app/api/products'
import { Shell } from '@/components/ui/shell'

type ProductDescriptionProps = {
  params: { name: string }
}

export default async function ProductDescription({
  params,
}: ProductDescriptionProps) {
  const { name } = params
  const product = await getProductByName(name)
  return (
    <Shell>
      <Card className='mt-5 rounded-xl border-0 bg-transparent'>
        <div className='flex items-center justify-center '>
          {product && (
            <div className='max-w-6xl mx-auto rounded-lg overflow-hidden my-8 flex flex-col sm:flex-row'>
              <div className='sm:w-1/2'>
                <img
                  src={product?.image ?? ''}
                  alt={product?.name ?? ''}
                  className='mt-8 w-80 h-auto mx-auto'
                />
              </div>
              <div className='p-6 sm:w-1/2'>
                <CardTitle className='text-xl font-semibold mb-2'>
                  {product?.name ?? ''}
                </CardTitle>
                <CardDescription className='text-base mb-4 text-justify'>
                  {product?.description ?? ''}
                </CardDescription>
                <CardDescription className='font-bold text-base'>
                  Price: ₹{product?.price ?? ''}
                </CardDescription>
                <Link href='/products'>
                  <Button className='mt-5'>Go Back</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Card>
    </Shell>
  )
}
