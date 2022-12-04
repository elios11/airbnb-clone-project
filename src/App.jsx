import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Card from "./components/Card/Card"
import experiencesData from "./data"

export default function App() {
    const experiencesCards = experiencesData.map(experience => {
        return <Card
                    key={experience.id}
                    experience={experience}
               />
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards">
                {experiencesCards}
            </div>
        </div>
    )
}