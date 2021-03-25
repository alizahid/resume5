import { getUser } from '../../lib/auth'

const handler = async (req, res) => {
  const user = await getUser(req)

  res.json({
    user
  })
}

export default handler
