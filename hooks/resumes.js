import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

import { request } from '../lib/api'

export const useCreateResume = () => {
  const { push } = useRouter()

  const [loading, setLoading] = useState(false)

  const createResume = useCallback(
    async (title) => {
      setLoading(true)

      try {
        const {
          resume: { id }
        } = await request('/api/create-resume', 'post', null, {
          title
        })

        push(`/resumes/${id}`)
      } catch {
        setLoading(false)
      }
    },
    [push]
  )

  return {
    createResume,
    loading
  }
}

export const useUpdateResume = () => {
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const updateResume = useCallback(async (resumeId, title, theme, data) => {
    setError()
    setLoading(true)

    try {
      await request('/api/update-resume', 'post', null, {
        data,
        resumeId,
        theme,
        title
      })

      setLoading(false)
    } catch ({ error }) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    error,
    loading,
    updateResume
  }
}
