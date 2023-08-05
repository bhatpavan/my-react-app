import "./Card.css"

export function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.imgUrl} />
            {props.openSpots === 0 &&  <div className="card-badge">
                SoldOut</div>}
            <div className="card-rating">
                <img src={require("../assets/Star 1.png")} />
                <span className="card-span">{props.rating} </span>
                <span className="card-grey">({props.noOfRatings}) .</span>
                <span className="card-grey">{props.country}</span>
            </div>
        </div>
    )
}