import prisma from '@/lib/prisma'

export default async function getData() {
  const result = await prisma.product.findMany()
  return result
}
