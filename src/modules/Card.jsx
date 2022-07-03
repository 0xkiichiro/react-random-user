import React from "react";
import "./Card.css";

const Card = ({ person }) => {
  return (
    <div className="card">
      <div className="image line">
        <img src={person.picture.large} alt="picture" />
      </div>
      <div className="name line">
        Name: {person.name.title} {person.name.first} {person.name.last}
      </div>
      <div className="gender line">Gender: {person.gender}</div>
      <div className="location line">Location: {person.location.country}</div>
      <div className="registered line">
        Register Date: {person.registered.date.slice(0, 10)}
      </div>
    </div>
  );
};

export default Card;
