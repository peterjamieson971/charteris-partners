import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Charteris Partners - AI Solutions in 30 Days',
    short_name: 'Charteris Partners',
    description: 'Business Technologists who build AI solutions in 30 days, not PowerPoints. Real software that cuts costs by 30%, creates new revenue streams, and stays with you forever.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#3B82F6',
    icons: [
      {
        src: '/images/Transparent_Navy_Blue__1_.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
