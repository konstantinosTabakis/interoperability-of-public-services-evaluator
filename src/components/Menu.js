import { NavLink } from "react-router-dom"
function Menu() {
    return (
        <nav className="nav-menu">
            <ul>
                <li><NavLink className="nav-link" to='/' end>Home</NavLink></li>
                <li><NavLink className="nav-link" to='/survey' end>Survey</NavLink></li>
                <li><NavLink className="nav-link" to='/about' end>About</NavLink></li>
                <li>
                    <select name="lang" id="lang" >
                        <option value="en">EN</option>
                        <option value="el">EL</option>
                    </select>
                </li>
            </ul>

        </nav>
    )
}

export default Menu