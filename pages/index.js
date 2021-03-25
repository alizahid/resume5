import Head from 'next/head'
import React from 'react'

import { Footer } from '../components/footer'
import { Header } from '../components/header'

const Home = () => {
  return (
    <div className="layout">
      <Head>
        <title>Resume 5.0</title>
      </Head>

      <Header />

      <main className="page"></main>

      <Footer />
    </div>
  )
}

export default Home