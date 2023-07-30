import React from "react";
import { Link } from "react-router-dom";

const SmoothieCard = ({ smootie }) => {
  return (
    <div className="smoothie-card">
      <h3>{smootie.Title}</h3>
      <p>{smootie.Method}</p>
      <div className="rating">{smootie.Ratings}</div>
      <div className="buttons">
        <Link to={"/" + smootie.id}>
          <i className="material-icons">edit</i>
        </Link>
      </div>
    </div>
  );
};

export default SmoothieCard;
