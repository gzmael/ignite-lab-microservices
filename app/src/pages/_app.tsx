import { UserProvider } from '@auth0/nextjs-auth0'
import type { AppProps } from 'next/app'

import { GlobalStyles } from '../components/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </UserProvider>
  )
}
export default MyApp
