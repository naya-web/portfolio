import { Link } from "react-router-dom"
import './NavBarStyle.css'

function NavBar() {
  return (
    <>
    <div className="nav">
        <h3>LOGO</h3>
        <div>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'about'}>About</Link>
                </li>
                <li>
                    <Link to={'portfolio'}>Portfolio</Link>
                </li>
                <li>
                    <Link to={'contact'}>Contact</Link>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default NavBar