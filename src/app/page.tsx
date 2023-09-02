import Link from 'next/link'

import { Balancer } from 'react-wrap-balancer'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
export default function Home() {
  return (
    <main>
      <section
        id='hero'
        aria-labelledby='hero-heading'
        className='mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28'
      >
        <h1 className='text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]'>
          An e-commerce application built with everything new in Next.js 13
        </h1>
        <Balancer className='max-w-[46rem] text-lg text-muted-foreground sm:text-xl'>
          Buy and sell products from independent brands and stores around the
          world
        </Balancer>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <Link href='/products' className={cn(buttonVariants())}>
            Buy now
            <span className='sr-only'>Buy now</span>
          </Link>
          <Link
            href='/dashboard/stores'
            className={cn(
              buttonVariants({
                variant: 'outline',
              })
            )}
          >
            Sell now
            <span className='sr-only'>Sell now</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
