import logoImg from '../assets/logo.png'

export default function Nav({ scrolled }) {
  return (
    <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="logo">
          <img src={logoImg} alt="Plan2Automate" className="logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="#workflow">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#why">Why Us</a></li>
        </ul>
        <div className="nav-cta">
          <a href="#" className="btn-ghost">Log in</a>
          <a href="#" className="btn-primary">Book Demo</a>
        </div>
      </div>
    </nav>
  )
}
