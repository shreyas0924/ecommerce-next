/* eslint-disable @next/next/no-img-element */
import prisma from '@/lib/prisma'
import { ChevronLeftSquare } from 'lucide-react'
import Link from 'next/link'

type ProductDescriptionProps = {
  params: { name: string }
}

export default async function ProductDescription({
  params,
}: ProductDescriptionProps) {
  const decodedName = decodeURIComponent(params.name)
  const product = await prisma.product.findFirst({
    where: {
      name: decodedName,
    },
  })
  console.log(product)
  return (
    <>
      <Link href='/' className='cursor-pointer'>
        <ChevronLeftSquare className='ml-8 mt-5 w-7 h-7' />
      </Link>
      <div className='flex flex-col items-center'>
        <div className='text-2xl m-6 font-bold'>
          {decodedName ? decodedName : 'No name provided'}
        </div>
        {product && (
          <div className='max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg my-8'>
            <img
              src={product?.image ?? ''}
              alt={product?.name ?? ''}
              className='w-full'
            />
            <div className='p-6'>
              <h2 className='text-xl font-semibold mb-2'>
                {product?.name ?? ''}
              </h2>
              <p className='text-gray-700 text-base mb-4'>
                {product?.description ?? ''}
              </p>
              <p className='text-gray-700 text-base'>
                Price: ₹{product?.price ?? ''}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
