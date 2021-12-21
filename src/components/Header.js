import {Link} from "react-router-dom"
import "../styles/Header.css"
const Header = () => {
    return(
        <div className="">
            <nav className="home-nav">
                <Link to='/'><h1 className="home-nav-title">SATURDAY<br/>NIGHT<br/>ROULETTE</h1></Link>
                <ul>
                <Link to='/'><li>Mes matchs</li></Link>
                <Link to='/filters'><li>Filtres</li></Link>
                <Link to='/'><li>Se déconnecter</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header