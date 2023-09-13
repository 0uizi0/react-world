import axios from 'axios'

interface RegisterFormData {
  username: string
  email: string
  password: string
}

interface LoginFormData {
  email: string
  password: string
}

export const registerApi = async (formData: RegisterFormData) => {
  try {
    const resp = await axios.post(process.env.NEXT_PUBLIC_API_URL + `users`, {
      user: formData,
    })
    return resp.data
  } catch (error) {
    throw error
  }
}

export const loginApi = async (formData: LoginFormData) => {
  try {
    const resp = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + `users/login`,
      {
        user: formData,
      },
    )
    return resp.data
  } catch (error) {
    throw error
  }
}

export const fetchUserData = async (authToken: string | undefined) => {
  try {
    if (!authToken) {
      throw new Error('Auth token is missing')
    }

    const resp = await axios.get(process.env.NEXT_PUBLIC_API_URL + `user`, {
      headers: {
        Authorization: `Token ${authToken}`,
      },
    })

    const data = resp.data
    if (data.user) {
      return data.user
    } else {
      throw new Error('No user data found')
    }
  } catch (error) {
    console.error('사용자 데이터를 가져오는 데 문제가 발생했습니다.', error)
  }
}
