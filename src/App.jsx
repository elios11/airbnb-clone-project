import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Card from "./components/Card/Card"
/* import katie_img from "katie-zaferes-img.png"
 */
export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards">
                <Card
                    img="/images/katie-zaferes-img.png"
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