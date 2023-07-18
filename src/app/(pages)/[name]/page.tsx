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
      <div className='text-2xl m-6'>
        Description : {decodedName ? decodedName : 'No name provided'}
      </div>
    </>
  )
}
