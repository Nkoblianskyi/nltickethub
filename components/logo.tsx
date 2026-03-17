'use client'

import Link from 'next/link'
import Image from 'next/image'

type LogoVariant = 'header' | 'footer'

interface LogoProps {
  variant?: LogoVariant
  className?: string
  href?: string
  showWordmark?: boolean
}

export function Logo({ variant = 'header', className = '', href = '/', showWordmark = true }: LogoProps) {
  const isFooter = variant === 'footer'

  const content = (
    <>
      <Image src="/favicon.ico" width={40} height={40} alt="Logo" />
      {showWordmark && (
        <span className={`font-serif font-bold text-lg sm:text-xl tracking-tight ${isFooter ? 'text-primary-foreground' : 'text-foreground'}`}>
          nl<span className={isFooter ? 'text-accent-light' : 'text-accent'}>ticket</span>hub
        </span>
      )}
    </>
  )

  const wrapClassName = `flex items-center gap-2 shrink-0 ${className}`

  if (href) {
    return (
      <Link href={href} className={wrapClassName} aria-label="nltickethub – startpagina">
        {content}
      </Link>
    )
  }

  return <div className={wrapClassName}>{content}</div>
}
