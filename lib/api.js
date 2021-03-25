import axios from 'axios'

export const request = async (url, method, params, data) => {
  try {
    const response = await axios({
      data,
      method,
      params,
      url,
      withCredentials: true
    })

    return response.data
  } catch (error) {
    throw error.response.data
  }
}
