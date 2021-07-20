import '@/css/tailwind.css'
import * as ga from '@/lib/ga'
import LayoutWrapper from '@/components/LayoutWrapper'
import ScrollToTop from '@/components/ScrollToTop'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('../components/MapLeaf'), {
  ssr: false,
})

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  pageProps = { MapNoSSR: MapWithNoSSR, ...pageProps }
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
        <ScrollToTop />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
