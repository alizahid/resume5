import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { Icon } from '../../components/common/icon'
import { Message } from '../../components/common/message'
import { Spinner } from '../../components/common/spinner'
import { ResumeData } from '../../components/resume/data'
import { ResumePreview } from '../../components/resume/preview'
import { ResumeThemes } from '../../components/resume/themes'
import { useUpdateResume } from '../../hooks/resumes'
import { getUser } from '../../lib/auth'
import { prisma } from '../../lib/prisma'

const Resume = ({ resume }) => {
  const { error, loading: updating, updateResume } = useUpdateResume()

  const [data, setData] = useState(resume.data)
  const [theme, setTheme] = useState(resume.theme)

  return (
    <>
      <Head>
        <title>{resume.title} / Resume / Resume 5.0</title>
      </Head>

      {error && (
        <Message
          className="fixed bottom-4 right-4 z-20"
          message={error}
          type="error"
        />
      )}

      <main className="flex flex-col max-h-screen">
        <header className="bg-white flex items-stretch border-b border-gray-200">
          <Link href="/resumes">
            <a className="flex items-center text-black px-4">
              <Icon name="line-back" />
            </a>
          </Link>

          <h1 className="text-xl font-medium my-3">{resume.title}</h1>

          <nav className="flex ml-auto mr-4">
            <a
              className="flex items-center font-medium px-4"
              href="#download"
              onClick={(event) => {
                event.preventDefault()
              }}>
              <Icon name="download" />
            </a>
            <a
              className="flex items-center font-medium px-4"
              href="#save"
              onClick={(event) => {
                event.preventDefault()

                updateResume(resume.id, resume.title, theme, data)
              }}>
              {updating ? <Spinner /> : <Icon name="save" />}
            </a>
          </nav>
        </header>

        <div
          className="flex-1 flex"
          style={{
            height: 'calc(100vh - 3.25rem - 1px)'
          }}>
          <div className="border-r border-gray-100 w-2/5 overflow-y-auto">
            <ResumeData data={data} onChange={(data) => setData(data)} />
          </div>

          <div className="w-3/5">
            <ResumeThemes onChange={(theme) => setTheme(theme)} theme={theme} />

            <div
              className="overflow-y-auto border-t border-gray-100"
              style={{
                height: 'calc(100vh - 3.25rem - 4.75rem - 1px)'
              }}>
              <ResumePreview data={data} theme={theme} />
            </div>
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
