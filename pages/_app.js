import '@/css/tailwind.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import LayoutWrapper from '@/components/LayoutWrapper'

import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('../components/MapLeaf'), {
  ssr: false,
})

export default function App({ Component, pageProps }) {
  pageProps = { MapNoSSR: MapWithNoSSR, ...pageProps }
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
