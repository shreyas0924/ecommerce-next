import prisma from '@/lib/prisma'

export default async function getData() {
  const result = await prisma.product.findMany()
  return result
}

export async function getProductByName(name: string) {
  const decodedName = decodeURIComponent(name)
  const product = await prisma.product.findFirst({
    where: {
      name: decodedName,
    },
  })

  return product
}
