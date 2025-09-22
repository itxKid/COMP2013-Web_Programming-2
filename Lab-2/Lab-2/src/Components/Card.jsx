export default function Card(props) {

    const ratingColor = {color: Number(props.rating.replace("★","")) > 4.0 ? 'green' : 'red'};
    return <div className="Card-Component">
        <img src= {props.image} alt="" width="250px"/>
        <h2>{props.location}</h2>
        <h2>{props.resort}</h2>
        <h2 style={ratingColor}>{props.rating}</h2>
        <h2>{props.price}</h2>
    </div>
}