import prisma from '@/lib/prisma'
import { ChevronLeftSquare } from 'lucide-react'
import Link from 'next/link'

type ProductDescriptionProps = {
  params: { name: string }
}

export default function ProductDescription({
  params,
}: ProductDescriptionProps) {
  const decodedName = decodeURIComponent(params.name)
  // const product = prisma.product.findUnique({
  //   where: {
  //     // Update this part based on your Prisma schema
  //     // For example, if there is an id field in ProductWhereUniqueInput:
  //     name: decodedName,
  //   },
  // })

  return (
    <>
      <Link href='/' className='cursor-pointer'>
        <ChevronLeftSquare className='ml-6 mt-5' />
      </Link>
      <div className='text-2xl ml-4'>
        Description : {decodedName ? decodedName : 'No name provided'}
      </div>
    </>
  )
}
