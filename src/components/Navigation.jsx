import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>HRnet</h1>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Create Employee
          </Link>
        </li>
        <li>
          <Link to="/employee-list" className="nav-link">
            View Current Employees
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation 