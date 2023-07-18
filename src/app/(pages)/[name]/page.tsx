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
        <ChevronLeftSquare className='ml-6 mt-5' />
      </Link>
      <div className='text-2xl ml-4'>
        Description : {decodedName ? decodedName : 'No name provided'}
      </div>
    </>
  )
}
