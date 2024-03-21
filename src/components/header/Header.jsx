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