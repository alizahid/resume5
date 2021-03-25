import Head from 'next/head'
import React from 'react'

import { Footer } from '../components/footer'
import { Header } from '../components/header'

const Home = () => {
  return (
    <div className="layout landing">
      <Head>
        <title>Not found / Resume 5.0</title>
      </Head>

      <Header />

      <main className="flex flex-col justify-center">
        <h1 className="text-6xl font-bold">Not found</h1>
        <div className="text-2xl font-medium mt-4">
          What you were looking for, does not exist.
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
