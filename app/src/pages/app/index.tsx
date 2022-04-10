import React from 'react'

import { getAccessToken, useUser } from '@auth0/nextjs-auth0'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

interface AppProps {
  token: string
}
const App = ({ token }: AppProps) => {
  const { user } = useUser()

  return (
    <div>
      <h1>Olá</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <br />
      {token}
      <br />
      <Link href="/api/auth/logout">Logout</Link>
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = withPageAuthRequired()
export const getServerSideProps: GetServerSideProps<AppProps> = async ({
  req,
  res
}) => {
  const { accessToken } = await getAccessToken(req, res)

  return {
    props: {
      token: accessToken ?? ''
    }
  }
}

export default App
