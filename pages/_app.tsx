import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/normalize.scss'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Agency | Nikita Vakula</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
