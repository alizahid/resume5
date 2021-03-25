import { compare } from 'bcryptjs'
import joi from 'joi'
import { sign } from 'jsonwebtoken'
import { setCookie } from 'nookies'

import { cookieOptions } from '../../lib/config'
import { apiError } from '../../lib/error'
import { prisma } from '../../lib/prisma'

const schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
})

const handler = async (req, res) => {
  if (req.method.toLowerCase() !== 'post') {
    return apiError(res, 400, 'Invalid method')
  }

  const { error, value } = schema.validate(req.body)

  if (error) {
    return apiError(res, 400, error.message)
  }

  const { email, password } = value

  const user = await prisma().user.findUnique({
    where: {
      email
    }
  })

  if (!user) {
    return apiError(res, 404, 'User not found')
  }

  if (!compare(password, user.password)) {
    return apiError(res, 404, 'User not found')
  }

  const token = sign(
    {
      id: user.id
    },
    process.env.TOKEN_SECRET
  )

  setCookie(
    {
      res
    },
    'token',
    `Bearer ${token}`,
    cookieOptions
  )

  res.json({
    token,
    user: {
      ...user,
      password: undefined
    }
  })
}

export default handler
