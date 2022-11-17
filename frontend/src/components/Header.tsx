import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DS Meta" />
        <h1>DS Meta</h1>
        <p>Developed by Manoel Lima</p>
      </div>
    </header >
  )
}

export default Header
