import { PrismaClient } from '@prisma/client'
import { verify } from 'jsonwebtoken'
import { parseCookies } from 'nookies'

import { cookieOptions } from './config'

export const getUser = async (req) => {
  try {
    const { token } = parseCookies(
      {
        req
      },
      cookieOptions
    )

    const auth = token.slice(7)

    const { id } = verify(auth, process.env.TOKEN_SECRET)

    const prisma = new PrismaClient()

    const user = await prisma.user.findUnique({
      select: {
        email: true,
        id: true,
        name: true
      },
      where: {
        id
      }
    })

    return user
  } catch {
    return null
  }
}
