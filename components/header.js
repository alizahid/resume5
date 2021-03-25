import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

import { useProfile } from '../hooks/auth'
import { Logo } from './logo'
import { Spinner } from './spinner'

export const Header = () => {
  const { events } = useRouter()

  const { fetch, loading, user } = useProfile()

  useEffect(() => {
    fetch()

    events.on('routeChangeComplete', fetch)

    return () => {
      events.off('routeChangeComplete', fetch)
    }
  }, [events, fetch])

  return (
    <header className="flex items-center justify-between">
      <Link href="/">
        <a className="text-indigo-600">
          <Logo size={48} />
        </a>
      </Link>

      {user ? (
        <nav className="flex items-center">
          <NavLink hero href="/resumes">
            Resumes
          </NavLink>
          <NavLink href="/sign-out">Sign out</NavLink>
        </nav>
      ) : loading ? (
        <Spinner />
      ) : (
        <nav className="flex items-center">
          <NavLink hero href="/sign-up">
            Create your resume
          </NavLink>
          <NavLink href="/sign-in">Sign in</NavLink>
        </nav>
      )}
    </header>
  )
}

const NavLink = ({ children, className, hero, href }) => (
  <Link href={href}>
    <a
      className={clsx(
        'font-medium ml-4 first:ml-0',
        hero
          ? 'bg-indigo-500 p-2 rounded-lg hover:text-white hover:bg-indigo-400 text-white'
          : 'text-black',
        className
      )}>
      {children}
    </a>
  </Link>
)

NavLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  className: PropTypes.string,
  hero: PropTypes.bool,
  href: PropTypes.string.isRequired
}
