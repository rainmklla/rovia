import { NavLink } from "react-router-dom";
import logo from "../assets/rovia-logo-navy-transparent.png";
import "../styles/Navbar.css";

const links = [
    { to: "/", label: "Home", end: true },
    { to: "/destinations", label: "Destinations" },
    { to: "/my-trips", label: "My Trips" },
    { to: "/about", label: "About" },
];

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar__inner container">
                <NavLink to="/" className="navbar__brand" end>
                    <img src={logo} alt="Rovia logo" className="navbar__mark" />
                </NavLink>

                <nav aria-label="Primary">
                    <ul className="navbar__links">
                        {links.map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    end={link.end}
                                    className={({ isActive }) =>
                                        "navbar__link" + (isActive ? " navbar__link--active" : "")
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;