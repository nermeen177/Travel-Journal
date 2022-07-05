import React from "react";
import "./Card.css";
import { FaLocationArrow } from "react-icons/fa";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="card">
        <img src={props.item.imageUrl} className="image" alt="location image" />
        <div className="content">
          <FaLocationArrow className="icon" />
          <span style={{ marginRight: 20 }}>{props.item.location}</span>
          <a href={props.item.googleMapsUrl} style={{ color: "grey" }}>
            View on Google Maps
          </a>
          <h2>{props.item.title}</h2>
          <span style={{ fontWeight: "bold" }}>
            {props.item.startDate} - {props.item.endDate}
          </span>
          <p>{props.item.description}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
