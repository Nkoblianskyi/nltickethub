import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over ons | nltickethub',
  description: 'Leer meer over nltickethub: onafhankelijke kaartprijsvergelijking in Nederland. Wij verkopen geen kaartjes.',
}

export default function OverOnsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
