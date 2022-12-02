import PhotoGrid from "../../assets/photo-grid.png"
import "./Hero.css"

export default function Main() {
    return (
        <div className="hero">
            <img className="hero--photo-grid" src={PhotoGrid} />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--description">
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </div>
    )
}