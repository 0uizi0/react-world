'use client'
import Image from 'next/image'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { fetchUserData } from '../../utils/api'

const AuthLinks = () => {
  const authToken = Cookies.get('authToken')
  const router = useRouter()
  const [userData, setUserData] = useState(null)
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && authToken) {
      fetchUserData(authToken)
        .then((user) => setUserData(user))
        .catch((error) => {
          console.error(
            '사용자 데이터를 가져오는 데 문제가 발생했습니다.',
            error,
          )
        })
    }
  }, [authToken])

  const handleLogout = () => {
    Cookies.remove('authToken')
    router.push('/')
  }

  return (
    <>
      {authToken && mounted ? (
        <>
          <li className="nav-item">
            <Link href="/editor" className="nav-link">
              <i className="ion-compose"></i>&nbsp;New Article
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/settings" className="nav-link">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </Link>
          </li>
          {userData ? (
            <li className="nav-item">
              <Link href={`/profile/${userData.username}`} className="nav-link">
                {userData.image ? (
                  <Image
                    src={userData.image}
                    className="user-pic"
                    alt=""
                    width={26}
                    height={26}
                  />
                ) : null}
                {userData.username}
              </Link>
            </li>
          ) : null}
          <li className="nav-item">
            <a className="nav-link" onClick={handleLogout}>
              <span className="ion-gear-a"></span>&nbsp;Logout
            </a>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <Link href="/login" className="nav-link">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/register" className="nav-link">
              Sign up
            </Link>
          </li>
        </>
      )}
    </>
  )
}

export default AuthLinks
