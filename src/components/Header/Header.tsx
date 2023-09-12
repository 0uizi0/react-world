import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <AuthLinks />
        </ul>
      </div>
    </nav>
  )
}

export default Header
