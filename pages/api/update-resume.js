import joi from 'joi'

import { getUser } from '../../lib/auth'
import { contactTypes } from '../../lib/data'
import { apiError } from '../../lib/error'
import { prisma } from '../../lib/prisma'

const schema = joi.object({
  data: joi.object({
    contact: joi.object().keys(
      contactTypes.reduce((keys, key) => {
        keys[key] = joi.string()

        return keys
      }, {})
    ),
    education: joi
      .array()
      .items(
        joi.object({
          degree: joi.string().required(),
          from: joi.date().required(),
          school: joi.string().required(),
          to: joi.date().required()
        })
      )
      .required(),
    experience: joi
      .array()
      .items(
        joi.object({
          company: joi.string().required(),
          description: joi.string().required(),
          from: joi.date().required(),
          position: joi.string().required(),
          to: joi.date().required()
        })
      )
      .required(),
    personal: joi.object({
      subtitle: joi.string().required(),
      title: joi.string().required()
    }),
    skills: joi
      .array()
      .items(
        joi.object({
          description: joi.string().required(),
          type: joi.string().valid('line', 'years').required(),
          years: joi.number().integer()
        })
      )
      .required()
  }),
  resumeId: joi.number().integer().required(),
  theme: joi.string().required(),
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

  const { data, resumeId, theme, title } = value

  const resume = await prisma().resume.findUnique({
    where: {
      id: resumeId
    }
  })

  if (!resume) {
    return apiError(res, 404, 'Resume not found')
  }

  if (resume.userId !== user.id) {
    return apiError(res, 401, 'Resume not found')
  }

  const next = await prisma().resume.update({
    data: {
      data,
      theme,
      title
    },
    where: {
      id: resume.id
    }
  })

  res.json({
    resume: next
  })
}

export default handler
