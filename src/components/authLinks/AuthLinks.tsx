import Image from 'next/image'
import Link from 'next/link'

const AuthLinks = () => {
  const status = 'notauthenticated'
  return (
    <>
      {status === 'notauthenticated' ? (
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
      ) : (
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
          <li className="nav-item">
            <Link href="/profile/eric-simons" className="nav-link">
              <Image src="" className="user-pic" alt="" />
              Eric Simons
            </Link>
          </li>
        </>
      )}
    </>
  )
}

export default AuthLinks
