import { Link } from "react-router-dom"
import "../NavBar/NavBar.css"

function NavBar() {



    return (
        <header className="headerNav">
            <h1>Void Movies</h1>
            <nav className="NavBar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/List">List</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar