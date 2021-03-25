import 'tailwindcss/tailwind.css'
import '../styles/global.scss'

import { AppProps } from 'next/app'
import React from 'react'

import { Footer } from '../components/footer'
import { Header } from '../components/header'

const Resume5 = ({ Component, pageProps }) => (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
)

Resume5.propTypes = AppProps

export default Resume5
