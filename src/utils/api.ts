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
