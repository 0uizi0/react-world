'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { registerApi } from '../../utils/api'
import { useForm } from '../../utils/useForm'

const Register = () => {
  const { formData, handleChange } = useForm({
    username: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState<{ [key: string]: string[] } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const resp = await registerApi(formData)
      console.log('회원가입 성공', resp.data)
      window.location.href = '/'
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setError(error.response.data.errors)
      } else {
        setError({ general: ['서버 오류 발생'] })
      }
      console.error(
        '회원가입 실패',
        error.response ? error.response.data : '서버 오류 발생',
      )
    }
  }
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link href="/login">Have an account?</Link>
            </p>
            {error !== null && (
              <ul className="error-messages">
                {Object.keys(error).map((key) =>
                  error[key].map((errorMessage) => (
                    <li key={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}{' '}
                      {errorMessage}
                    </li>
                  )),
                )}
              </ul>
            )}
            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </fieldset>
              <button
                type="submit"
                className="btn btn-lg btn-primary pull-xs-right"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
