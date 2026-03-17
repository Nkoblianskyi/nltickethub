'use client'

import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoVariant = 'header' | 'footer'

interface LogoProps {
  variant?: LogoVariant
  className?: string
  href?: string
  showWordmark?: boolean
}

export function Logo({ variant = 'header', className = '', href = '/', showWordmark = true }: LogoProps) {
  const isFooter = variant === 'footer'
  const base = isFooter ? 'text-primary-foreground' : 'text-foreground'
  const accent = isFooter ? 'text-accent-warm' : 'text-accent'

  const content = (
    <>
      <span className={cn(
        'relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
        isFooter ? 'bg-white/15' : 'bg-primary'
      )}>
        <Image src="/favicon.ico" width={24} height={24} alt="" className="object-contain" />
      </span>
      {showWordmark && (
        <span className={`inline-flex items-baseline gap-0.5 font-sans text-xl font-semibold tracking-tight sm:text-2xl ${base}`}>
          <span className="font-normal opacity-90">nl</span>
          <span className={`font-bold ${accent}`}>ticket</span>
          <span className="font-bold">hub</span>
        </span>
      )}
    </>
  )

  const wrapClassName = `flex items-center gap-3 shrink-0 ${className}`

  if (href) {
    return (
      <Link href={href} className={wrapClassName} aria-label="nltickethub – startpagina">
        {content}
      </Link>
    )
  }

  return <div className={wrapClassName}>{content}</div>
}
