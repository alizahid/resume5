import { PrismaClient } from '@prisma/client'
import { verify } from 'jsonwebtoken'

export const getUser = async (req) => {
  try {
    const cookie = req.cookies?.authorization

    const token = cookie.slice(7)

    const { id } = verify(token, process.env.TOKEN_SECRET)

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
