import { destroyCookie } from 'nookies'

import { cookieOptions } from '../../lib/config'

const handler = async (req, res) => {
  destroyCookie(
    {
      res
    },
    'token',
    cookieOptions
  )

  res.json({
    status: 'ok'
  })
}

export default handler
