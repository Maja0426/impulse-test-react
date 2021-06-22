import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import "../UI/Loader.css";

const BlogRenderer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    foundedBlogs();
  });

  const foundedBlogs = async () => {
    try {
      if (props.keyword.length > 0) {
        const res = await fetch(
          `https://impulseblog-api.herokuapp.com/api/posts?keyword=${props.keyword}`
        );
        setItems(await res.json());
        setLoading(true);
      }
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };

  if (props.keyword.length > 0 && !loading) {
    return (
      <div className='loader-container'>
        <div className='loader-item'></div>
      </div>
    );
  }

  return (
    <article>
      {items.map((item) => (
        <Card
          key={item._id}
          title={item.title}
          author={item.author}
          body={item.body}
          tags={item.tags}
        />
      ))}
    </article>
  );
};

export default BlogRenderer;
