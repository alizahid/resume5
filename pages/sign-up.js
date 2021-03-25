import Head from 'next/head'
import React, { useState } from 'react'

import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Message } from '../components/message'
import { Spinner } from '../components/spinner'
import { useSignUp } from '../hooks/auth'
import { getUser } from '../lib/auth'

const SignUp = () => {
  const { error, loading, signUp } = useSignUp()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="layout landing">
      <Head>
        <title>Sign up / Resume 5.0</title>
      </Head>

      <Header />

      <main>
        <h1 className="text-4xl font-bold">Sign up</h1>

        {error && <Message className="mt-8" message={error} type="error" />}

        <form
          className="mt-8"
          onSubmit={(event) => {
            event.preventDefault()

            signUp(name, email, password)
          }}>
          <label>
            <span>Name</span>
            <input
              onChange={(event) => setName(event.target.value)}
              placeholder="Ali Zahid"
              required
              type="text"
              value={name}
            />
          </label>

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

          <button>{loading ? <Spinner light /> : 'Sign up'}</button>
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

export default SignUp
