import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { useProfile } from '../hooks/auth'
import { Spinner } from './spinner'

export const Header = () => {
  const { events } = useRouter()

  const { fetch, loading, user } = useProfile()

  useEffect(() => {
    const handler = () => fetch()

    events.on('routeChangeComplete', handler)

    return () => {
      events.off('routeChangeComplete', handler)
    }
  }, [events, fetch])

  return (
    <header className="flex items-center justify-between p-8">
      <h1 className="font-bold text-2xl text-teal-500">Resume 5.0</h1>

      {user ? (
        <nav className="flex">
          <Link
            href="/resumes"
            onClick={async (event) => {
              event.preventDefault()
            }}>
            <a className="font-medium ml-4 first:ml-0">Resumes</a>
          </Link>
          <Link
            href="/sign-out"
            onClick={async (event) => {
              event.preventDefault()
            }}>
            <a className="font-medium ml-4 first:ml-0">Sign out</a>
          </Link>
        </nav>
      ) : loading ? (
        <Spinner />
      ) : (
        <nav className="flex">
          <Link href="/sign-in">
            <a className="font-medium ml-4 first:ml-0">Sign in</a>
          </Link>
        </nav>
      )}
    </header>
  )
}
