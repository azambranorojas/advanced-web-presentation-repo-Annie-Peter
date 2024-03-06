import React from "react"
import LocationInfo from "./LocationInfo"

export default function Card(props) {
    return <div className="card">
        <img src={`../../assets/${props.item.img}`} className="card--image" alt={`Image of ${props.item.name}`} />
        <h2>{props.item.name}</h2>
        <h3 className="gray">{props.item.latinName}</h3>
        <p className="gray"><b>Location: </b>{props.item.location}</p>
        <p className="gray"><b>Weight:</b> Male - {props.item.maleWeightLbs} lbs • Female -  {props.item.femaleWeightLbs} lbs</p>
        <p className="gray"><b>Avg Eggs Layed: </b>{props.item.eggsLayed}</p>
        <hr />
        <LocationInfo foundInCanada={props.item.foundInCanada} />
    </div>
}
