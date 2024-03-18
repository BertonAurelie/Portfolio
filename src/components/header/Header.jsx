import './header.scss'
import { GiBeech } from "react-icons/gi";

function Header() {

    return (
        <header>
            <div className = "header__container">
                <div id="logo">
                    <GiBeech />
                </div>
                <nav>
                    <ul>
                    <li><a href="#">Présentation</a></li>
                    <li><a href="#">Projets</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header