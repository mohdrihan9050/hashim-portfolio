import './Navbar.css'
import {Link} from 'react-scroll';
function Navbar(){
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light bg-custom">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">HAZ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">

        <li className="nav-item">
        <Link activeClass="active" to="about" spy={true} smooth={true} className="nav-link cursor-pointer">About</Link>
        </li>

        <li className="nav-item">
        <Link activeClass="active" to="services" spy={true} smooth={true} className="nav-link cursor-pointer">Services</Link>
        </li>

        <li className="nav-item">
        <Link activeClass="active" to="work" spy={true} smooth={true} className="nav-link cursor-pointer">Work</Link>
          
          </li>
          <li className="nav-item">
          <Link activeClass="active" to="skills" spy={true} smooth={true} className="nav-link cursor-pointer">Skills</Link>
          </li>
          <li className="nav-item">
          <Link activeClass="active" to="contact" spy={true} smooth={true} className="nav-link cursor-pointer">Contact me</Link>
          </li>
          
          </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar;