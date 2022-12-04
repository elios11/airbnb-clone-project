import "./Card.css"

export default function Card({experience}) {
    let badgeText;
    if (experience.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (experience.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            <div className="card--top">
                <img className="card--img" src={`/images/${experience.coverImg}`} alt="Katie Zaferes picture" />
                {badgeText && <div className="card--status">{badgeText}</div>}
            </div>
            <div className="card--rating">
                <img className="card--star" src="/images/rating-star.png" />
                <p>
                    {experience.stats.rating}
                    <span className="text-muted"> ({experience.stats.reviewCount}) • {experience.location} </span>
                </p>
            </div>
            <div className="card--description">
                {experience.title}
            </div>
            <div>
                <span className="bold">From ${experience.price}</span> / person
            </div>
        </div>
    )
}