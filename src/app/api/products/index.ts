import prisma from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getData() {
  const result = await prisma.product.findMany()
  return result
}
