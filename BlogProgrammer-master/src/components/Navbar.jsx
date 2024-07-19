import logo from '../assets/img/Logo.png'
export const Navbar = () => {
  return (
      <header className='Navbar'>
        <div className="contenedor-logo">
          <img src={logo} alt="logo" className='logo-diario'/>
          <h2 className='nombre-proyecto'>Mi blog programador.</h2>
        </div>
        <nav className='content-nav'>
          <a href="/taller" className="options">5to</a>
          <a href="/technology" className="options">6to</a>
        </nav>
      </header>
  )
}
