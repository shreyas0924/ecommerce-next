'use client'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

import { Icons } from '@/components/icons'

import { Shell } from '@/components/ui/shell'
import { links, siteConfig } from '@/lib/siteConfig'
import { useUser } from '@clerk/nextjs'

export function SiteFooter() {
  const { isLoaded } = useUser()
  if (!isLoaded) return <div />
  return (
    <footer className='border-t  '>
      <Shell as='div'>
        <section
          id='footer-content'
          aria-labelledby='footer-content-heading'
          className='flex flex-col gap-10 lg:flex-row lg:gap-20'
        >
          <section
            id='footer-branding'
            aria-labelledby='footer-branding-heading'
          >
            <Link
              aria-label='Home'
              href='/'
              className='flex w-fit items-center space-x-2'
            >
              <Icons.store className='h-6 w-6' aria-hidden='true' />
              <span className='font-bold'>{siteConfig.name}</span>
            </Link>
          </section>
          <section
            id='footer-links'
            aria-labelledby='footer-links-heading'
            className='grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4'
          ></section>
        </section>
        <section
          id='footer-bottom'
          aria-labelledby='footer-bottom-heading'
          className='flex items-center space-x-4'
        >
          <div className='flex-1 text-left text-sm leading-loose '>
            Built by{' '}
            <a
              aria-label='Kickflip tutorial on YouTube'
              href='https://twitter.com/Shreyas0924'
              target='_blank'
              rel='noreferrer'
              className='font-semibold transition-colors hover:text-foreground'
            >
              Shreyas
            </a>
            .
          </div>
          <div className='flex items-center space-x-1'>
            <Link
              href={links.github}
              target='_blank'
              rel='noreferrer'
              className={cn(
                buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })
              )}
            >
              <Icons.gitHub className='h-5 w-5' aria-hidden='true' />
              <span className='sr-only'>GitHub</span>
            </Link>
            <Link
              href={links.twitter}
              target='_blank'
              rel='noreferrer'
              className={cn(
                buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })
              )}
            >
              <Icons.twitter className='h-5 w-5' aria-hidden='true' />
              <span className='sr-only'>GitHub</span>
            </Link>
          </div>
        </section>
      </Shell>
    </footer>
  )
}
