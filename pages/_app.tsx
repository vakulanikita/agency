import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/normalize.scss'
import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { setupStore } from '../redux/store/store'

const store = setupStore()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Agency | Nikita Vakula</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
