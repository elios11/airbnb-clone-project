/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
import "./Card.css"
import katie_img from "../../assets/katie-zaferes-img.png"
import star from "../../assets/rating-star.png"

export default function Card() {
    return (
        <div className="card">
            <div className="card--top">
                <img className="card--img" src={katie_img} alt="Katie Zaferes picture" />
                <div className="card--status">SOLD OUT</div>
            </div>
            <div className="card--rating">
                <img className="card--star" src={star} />
                <p>
                    5.0
                    <span className="card--review-count"> (6) • USA </span>
                </p>
            </div>
            <div className="card--description">
                Life lessons with Katie Zaferes
            </div>
            <div>
                <span className="card--price">From $136</span> / person
            </div>
        </div>
    )
}