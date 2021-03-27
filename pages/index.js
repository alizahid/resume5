import Head from 'next/head'
import React from 'react'

import { Footer } from '../components/common/footer'
import { Header } from '../components/common/header'

const Home = () => {
  return (
    <div className="layout landing">
      <Head>
        <title>Resume 5.0</title>
      </Head>

      <Header />

      <main></main>

      <Footer />
    </div>
  )
}

export default Home
