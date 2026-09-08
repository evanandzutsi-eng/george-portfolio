type ResponsiveImageProps = {
  avif: string
  webp: string
  fallback: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function ResponsiveImage({avif, webp, fallback, alt, className, loading='lazy', fetchPriority='auto'}: ResponsiveImageProps) {
  return (
    <picture>
      <source srcSet={avif} type="image/avif" />
      <source srcSet={webp} type="image/webp" />
      <img src={fallback} alt={alt} className={className} loading={loading} fetchPriority={fetchPriority} decoding="async" />
    </picture>
  )
}
