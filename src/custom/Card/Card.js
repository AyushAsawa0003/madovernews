import React from "react";
import "./Card.css";

const Card = ({ url, title, description, link }) => {
  return (
    <>
      <div className="card-main fg-primary bg-secondary">
        <img className="card-img bg-primary" src={url} alt="" />
        <div className="flex-column card-content">
          <div className="card-title">{title}</div>
          <div className="card-discription">{description}</div>
          <a className="card-link" href={link} target="_blank">
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
