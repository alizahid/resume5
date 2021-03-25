import Head from 'next/head'
import React, { useState } from 'react'

import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Message } from '../components/message'
import { Spinner } from '../components/spinner'
import { useSignIn } from '../hooks/auth'
import { getUser } from '../lib/auth'

const SignIn = () => {
  const { error, loading, signIn } = useSignIn()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="layout landing">
      <Head>
        <title>Sign in / Resume 5.0</title>
      </Head>

      <Header />

      <main>
        <h1 className="text-4xl font-bold">Sign in</h1>

        {error && <Message className="mt-8" message={error} type="error" />}

        <form
          className="mt-8"
          onSubmit={(event) => {
            event.preventDefault()

            signIn(email, password)
          }}>
          <label>
            <span>Email</span>
            <input
              onChange={(event) => setEmail(event.target.value)}
              placeholder="ali@resume5.com"
              required
              type="email"
              value={email}
            />
          </label>

          <label>
            <span>Password</span>
            <input
              onChange={(event) => setPassword(event.target.value)}
              placeholder="H@x0r"
              required
              type="password"
              value={password}
            />
          </label>

          <button>{loading ? <Spinner light /> : 'Sign in'}</button>
        </form>
      </main>

      <Footer />
    </div>
  )
}

export const getServerSideProps = async ({ req }) => {
  const user = await getUser(req)

  if (user) {
    return {
      redirect: {
        destination: '/resumes',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default SignIn
