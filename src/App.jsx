import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Card from "./components/Card/Card"
import katie_img from "./assets/katie-zaferes-img.png"

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards">
                <Card
                    img={katie_img}
                    rating={5.0}
                    reviewCount={6}
                    country="USA"
                    title="Life lessons with Katie Zaferes"
                    price={136}
                />
            </div>
        </div>
    )
}