import { destroyCookie } from 'nookies'

import { cookieOptions } from '../lib/config'

const SignOut = () => null

export const getServerSideProps = async (context) => {
  destroyCookie(context, 'token', cookieOptions)

  return {
    redirect: {
      destination: '/',
      permanent: false
    }
  }
}

export default SignOut
