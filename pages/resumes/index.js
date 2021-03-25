import Head from 'next/head'
import Link from 'next/link'
import pluralize from 'pluralize'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { Spinner } from '../../components/spinner'
import { useCreateResume } from '../../hooks/resumes'
import { getUser } from '../../lib/auth'
import { prisma } from '../../lib/prisma'

const Resumes = ({ resumes }) => {
  const { createResume, loading } = useCreateResume()

  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState('')

  return (
    <div className="layout landing">
      <Head>
        <title>Resumes / Resume 5.0</title>
      </Head>

      <Header />

      <main>
        <header className="flex items-start justify-between">
          <h1 className="text-4xl font-bold">Resumes</h1>

          <div className="flex flex-col items-start">
            {visible ? (
              <form
                className="flex-row"
                onSubmit={(event) => {
                  event.preventDefault()

                  createResume(title)
                }}>
                <label className="mb-0">
                  <input
                    autoFocus
                    onChange={(event) => setTitle(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Escape') {
                        setVisible(false)
                      }
                    }}
                    placeholder="Title"
                    required
                    type="text"
                    value={title}
                  />
                </label>

                <button>{loading ? <Spinner light /> : 'Create'}</button>
              </form>
            ) : (
              <a
                className="bg-primary text-white hover:text-white hover:bg-primary-dark active:bg-primary-light font-medium p-3"
                href="#create"
                onClick={(event) => {
                  event.preventDefault()

                  setVisible(true)
                }}>
                Create resume
              </a>
            )}
          </div>
        </header>

        {resumes.length > 0 ? (
          <section className="mt-8 grid lg:grid-cols-2 gap-8">
            {resumes.map((resume) => (
              <Link href={`/resumes/${resume.id}`} key={resume.id}>
                <a className="bg-gray-100 hover:bg-gray-50 text-black hover:text-black flex justify-between p-4">
                  <div className="font-medium">{resume.title}</div>
                  <div>{pluralize('view', resume.views, true)}</div>
                </a>
              </Link>
            ))}
          </section>
        ) : (
          <div className="text-2xl font-medium mt-8">
            You haven&#39;t created any resumes yet.
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

Resumes.propTypes = {
  resumes: PropTypes.array
}

export const getServerSideProps = async ({ req }) => {
  const user = await getUser(req)

  if (!user) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false
      }
    }
  }

  const resumes = await prisma().resume.findMany({
    select: {
      id: true,
      title: true,
      views: true
    },
    where: {
      user: {
        id: user.id
      }
    }
  })

  return {
    props: {
      resumes
    }
  }
}

export default Resumes
