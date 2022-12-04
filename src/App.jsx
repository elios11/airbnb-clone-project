import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Card from "./components/Card/Card"
import experiencesData from "./data"

export default function App() {
    const experiencesCards = experiencesData.map(experience => {
        return <Card
                    key={experience.id}
                    img={`images/${experience.coverImg}`}
                    rating={experience.stats.rating}
                    reviewCount={experience.stats.reviewCount}
                    location={experience.location}
                    title={experience.title}
                    price={experience.price}
                    openSpots={experience.openSpots}
               />
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards">
                {experiencesCards}
                {experiencesCards}
            </div>
        </div>
    )
}