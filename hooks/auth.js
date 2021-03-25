import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

import { request } from '../lib/api'

export const useProfile = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState()

  const fetch = useCallback(async () => {
    setLoading(true)

    try {
      const { user } = await request('/profile')

      setUser(user)
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }, [])

  return {
    fetch,
    loading,
    user
  }
}

export const useSignIn = () => {
  const { push } = useRouter()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const signIn = useCallback(
    async (email, password) => {
      setError()
      setLoading(true)

      try {
        await request('/api/sign-in', 'post', null, {
          email,
          password
        })

        push('/resumes')
      } catch ({ error }) {
        setError(error)

        setLoading(false)
      }
    },
    [push]
  )

  return {
    error,
    loading,
    signIn
  }
}
