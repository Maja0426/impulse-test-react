import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2>{props.title}</h2>
        <h3>Szerző: {props.author}</h3>
      </div>
      <div className='card-body'>
        <p>{props.body}</p>
      </div>
      <div className='card-footer'>
        {props.tags.map((tag) => (
          <span className='pill' key={Math.random()}>
            #{tag}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
