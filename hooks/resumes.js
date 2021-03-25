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
