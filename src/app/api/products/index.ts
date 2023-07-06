import prisma from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await prisma.user.findMany()
  console.log(result)
}
