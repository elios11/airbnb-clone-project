import AirbnbLogo from "../../assets/airbnb-logo.png"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar--logo" src={AirbnbLogo} />
        </nav>
    )
}