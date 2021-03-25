import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'
import joi from 'joi'
import { sign } from 'jsonwebtoken'
import { setCookie } from 'nookies'

import { cookieOptions } from '../../lib/config'
import { apiError } from '../../lib/error'

const schema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(12).required()
})

const handler = async (req, res) => {
  if (req.method.toLowerCase() !== 'post') {
    return apiError(res, 400, 'Invalid method')
  }

  const { error, value } = schema.validate(req.body)

  if (error) {
    return apiError(res, 400, error.message)
  }

  const { name, email, password } = value

  const prisma = new PrismaClient()

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: await hash(password, 10)
    }
  })

  const token = sign(
    {
      id: user.id
    },
    process.env.TOKEN_SECRET
  )

  setCookie({ res }, 'token', `Bearer ${token}`, cookieOptions)

  res.json({
    token,
    user: {
      ...user,
      password: undefined
    }
  })
}

export default handler
