import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { ResumeData } from '../../components/data'
import { ResumePreview } from '../../components/preview'
import { ResumeTheme } from '../../components/theme'
import { getUser } from '../../lib/auth'
import { prisma } from '../../lib/prisma'

const Resume = ({ resume }) => {
  const [data, setData] = useState(resume.data)
  const [theme, setTheme] = useState(resume.theme)

  return (
    <>
      <Head>
        <title>{resume.title} / Resume / Resume 5.0</title>
      </Head>

      <main className="layout">
        <header className="fixed top-0 left-0 right-0 z-10 bg-white flex items-stretch border-b border-gray-200">
          <Link href="/resumes">
            <a className="flex items-center text-black font-medium px-4">
              &#8592;
            </a>
          </Link>

          <h1 className="text-xl font-medium my-3">{resume.title}</h1>

          <nav className="flex ml-auto">
            <a
              className="flex items-center font-medium px-8"
              href="#download"
              onClick={(event) => {
                event.preventDefault()
              }}>
              Download
            </a>
            <a
              className="flex items-center font-medium px-8"
              href="#save"
              onClick={(event) => {
                event.preventDefault()
              }}>
              Save
            </a>
          </nav>
        </header>

        <div className="flex">
          <div className="border-r border-gray-100 flex-1 h-screen overflow-y-auto p-4 pt-[69px]">
            <ResumeData data={data} onChange={(data) => setData(data)} />
          </div>

          <div className="flex-1 h-screen overflow-y-auto p-4 pt-[69px]">
            <ResumeTheme onChange={(theme) => setTheme(theme)} theme={theme} />
            <ResumePreview className="mt-8" data={data} theme={theme} />
          </div>
        </div>
      </main>
    </>
  )
}

Resume.propTypes = {
  resume: PropTypes.object
}

export const getServerSideProps = async ({ params, req }) => {
  if (!params.id || !Number(params.id)) {
    return {
      notFound: true
    }
  }

  const user = await getUser(req)

  if (!user) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false
      }
    }
  }

  const resume = await prisma().resume.findFirst({
    where: {
      id: Number(params.id),
      user: {
        id: user.id
      }
    }
  })

  if (!resume) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      resume
    }
  }
}

export default Resume
