'use client';
import Link from 'next/link';
import { Balancer } from 'react-wrap-balancer';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { RedirectToSignIn, useUser } from '@clerk/nextjs';
import { toast } from 'sonner';

import { SiteFooter } from './components/Footer';
import Loading from './loading';
export default function Home() {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) return <Loading />;
  return (
    <>
      <section
        id='hero'
        aria-labelledby='hero-heading'
        className='mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 py-8 text-center md:py-36'
      >
        <h1 className='text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]'>
          An e-commerce application built with everything new in Next.js 13
        </h1>
        <Balancer className='max-w-[46rem] text-lg text-muted-foreground sm:text-xl'>
          Buy and sell products from brands and independent stores around the
          world.
        </Balancer>
        <div className='flex flex-wrap items-center justify-center gap-4 mb-24'>
          {isSignedIn ? (
            <Link href='/products' className={cn(buttonVariants())}>
              Buy now
              <span className='sr-only'>Buy now</span>
            </Link>
          ) : (
            <Button
              onClick={() =>
                toast('Please Sign In to Buy Products', {
                  description: 'Sunday, December 03, 2023 at 9:00 AM',
                  action: {
                    label: 'Sign In',
                    onClick: () => <RedirectToSignIn />,
                  },
                })
              }
            >
              Buy now
            </Button>
          )}

          <Link
            href='/sell'
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
      <div className='justify-end mt-auto'>
        <SiteFooter />
      </div>
    </>
  );
}
