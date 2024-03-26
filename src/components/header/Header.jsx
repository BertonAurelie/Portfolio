import './header.scss'
import { VscActivateBreakpoints } from "react-icons/vsc";

function Header() {
    
    return (
        <header>
            <div className = "header__container">
                <div id="logo">
                <VscActivateBreakpoints />
                </div>
                <nav>
                    <ul>
                    <li><a href="#accueil">Accueil</a></li>
                    <li><a href="#presentation">Présentation</a></li>
                    <li><a href="#projets">Projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header