import joi from 'joi'

import { getUser } from '../../lib/auth'
import { apiError } from '../../lib/error'
import { prisma } from '../../lib/prisma'

const schema = joi.object({
  title: joi.string().required()
})

const handler = async (req, res) => {
  if (req.method.toLowerCase() !== 'post') {
    return apiError(res, 400, 'Invalid method')
  }

  const user = await getUser(req)

  if (!user) {
    return apiError(res, 404, 'User not found')
  }

  const { error, value } = schema.validate(req.body)

  if (error) {
    return apiError(res, 400, error.message)
  }

  const { title } = value

  const resume = await prisma().resume.create({
    data: {
      data: {
        contact: {},
        education: [],
        experience: [],
        personal: {},
        skills: []
      },
      title,
      user: {
        connect: {
          id: user.id
        }
      }
    }
  })

  res.json({
    resume
  })
}

export default handler
