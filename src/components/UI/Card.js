import React from "react";
import "./Card.css";

const Card = ({ title, author, body, tags }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2>{title}</h2>
        <h3>Szerző: {author}</h3>
      </div>
      <div className='card-body'>
        <p>{body}</p>
      </div>
      <div className='card-footer'>
        {tags.map((tag) => (
          <span className='pill' key={Math.random()}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
