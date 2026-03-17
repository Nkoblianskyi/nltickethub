import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react'
import { type Event, formatPrice, getMinPrice, getCategoryColor } from '@/lib/events-data'

interface EventCardProps {
  event: Event
  priority?: boolean
  /** spotlight = grote kaart homepage bento, compact = kleine kaart, default = lijst/grid, horizontal = breed */
  variant?: 'spotlight' | 'compact' | 'default' | 'horizontal'
}

export function EventCard({ event, priority = false, variant = 'default' }: EventCardProps) {
  const minPrice = getMinPrice(event.offers)
  const dateStr = new Date(event.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: variant === 'spotlight' ? 'numeric' : undefined })
  const timeStr = event.time

  if (variant === 'spotlight') {
    return (
      <Link
        href={`/evenementen/${event.id}`}
        className="group block h-full min-h-[320px] rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl hover:border-primary/25 transition-all duration-300"
        aria-label={`${event.title} – prijzen vergelijken`}
      >
        <div className="relative h-full min-h-[320px] flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-1/2 h-56 sm:h-full min-h-[220px]">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 50vw"
              priority={priority}
            />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${getCategoryColor(event.category)}`}>
                {event.category}
              </span>
            </div>
            {minPrice > 0 && (
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:w-36">
                <span className="inline-block bg-white/95 text-foreground font-bold text-lg px-3 py-1.5 rounded-lg shadow">
                  {formatPrice(minPrice)}
                </span>
                <p className="text-white/90 text-xs mt-1">vanaf · vergelijk</p>
              </div>
            )}
          </div>
          <div className="flex-1 flex flex-col justify-between p-5 sm:p-6 bg-card">
            <div>
              <h3 className="font-bold text-foreground text-lg sm:text-xl leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-2 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 shrink-0" />
                {dateStr} · {timeStr}
              </p>
              <p className="text-muted-foreground text-sm flex items-center gap-1.5 truncate mt-0.5">
                <MapPin className="w-4 h-4 shrink-0" />
                {event.venue}, {event.city}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-4">
              Aanbiedingen bekijken
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === 'compact') {
    return (
      <Link
        href={`/evenementen/${event.id}`}
        className="group flex flex-col h-full rounded-2xl overflow-hidden bg-card border border-border shadow-md hover:shadow-xl hover:border-primary/20 transition-all duration-300"
        aria-label={`${event.title} – prijzen vergelijken`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
          />
          <div className="absolute top-2 left-2">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${getCategoryColor(event.category)}`}>
              {event.category}
            </span>
          </div>
          {minPrice > 0 && (
            <div className="absolute bottom-2 right-2">
              <span className="bg-white/95 text-foreground font-bold text-sm px-2 py-1 rounded shadow">
                {formatPrice(minPrice)}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1 p-3">
          <h3 className="font-bold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <p className="text-muted-foreground text-xs mt-1">
            {dateStr} · {event.venue}
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-2">
            Vergelijken
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </Link>
    )
  }

  if (variant === 'horizontal') {
    return (
      <Link
        href={`/evenementen/${event.id}`}
        className="group flex flex-col sm:flex-row rounded-2xl overflow-hidden bg-card border border-border shadow-md hover:shadow-xl hover:border-primary/20 transition-all duration-300"
        aria-label={`${event.title} – prijzen vergelijken`}
      >
        <div className="relative w-full sm:w-2/5 min-h-[180px] sm:min-h-0 aspect-video sm:aspect-auto">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, 40vw"
            priority={priority}
          />
          <div className="absolute top-2 left-2 flex gap-1.5">
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${getCategoryColor(event.category)}`}>
              {event.category}
            </span>
          </div>
          {minPrice > 0 && (
            <div className="absolute bottom-2 left-2">
              <span className="bg-white/95 font-bold text-base px-2.5 py-1 rounded-lg shadow">
                {formatPrice(minPrice)}
              </span>
            </div>
          )}
        </div>
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-foreground text-base sm:text-lg leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {event.title}
            </h3>
            <p className="text-muted-foreground text-sm mt-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              {dateStr} · {timeStr}
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1 truncate">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              {event.venue}, {event.city}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-3">
            Aanbiedingen bekijken
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </Link>
    )
  }

  // default = grid/lijst
  return (
    <Link
      href={`/evenementen/${event.id}`}
      className="group flex flex-col h-full rounded-2xl overflow-hidden bg-card border border-border shadow-md hover:shadow-xl hover:border-primary/20 transition-all duration-300"
      aria-label={`${event.title} – prijzen vergelijken`}
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
        />
        <div className="absolute top-2 left-2">
          <span className={`text-xs font-bold px-2 py-0.5 rounded ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
        </div>
        {minPrice > 0 && (
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
            <span className="bg-white/95 text-foreground font-bold px-2.5 py-1 rounded-lg shadow text-sm">
              {formatPrice(minPrice)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-bold text-foreground text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="text-muted-foreground text-sm mt-1 flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          {dateStr} · {timeStr}
        </p>
        <p className="text-muted-foreground text-sm flex items-center gap-1 truncate">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          {event.venue}, {event.city}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-3">
          Vergelijken
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  )
}
