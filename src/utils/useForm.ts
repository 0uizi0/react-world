import { useState } from 'react'

export function useForm<T>(initialState: T) {
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return {
    formData,
    handleChange,
  }
}
