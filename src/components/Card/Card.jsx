import "./Card.css"
/* import star from "rating-star.png" */

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--top">
                <img className="card--img" src={props.img} alt="Katie Zaferes picture" />
                <div className="card--status">SOLD OUT</div>
            </div>
            <div className="card--rating">
                <img className="card--star" src="/images/rating-star.png" />
                <p>
                    {props.rating}
                    <span className="text-muted"> ({props.reviewCount}) • {props.country} </span>
                </p>
            </div>
            <div className="card--description">
                {props.title}
            </div>
            <div>
                <span className="bold">From ${props.price}</span> / person
            </div>
        </div>
    )
}