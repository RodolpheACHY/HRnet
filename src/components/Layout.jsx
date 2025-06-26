import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="app-layout">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>HRnet</h1>
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/create-employee" className="nav-link">
              Créer un employé
            </Link>
          </li>
          <li>
            <Link to="/employee-list" className="nav-link">
              Liste des employés
            </Link>
          </li>
        </ul>
      </nav>
      
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout 