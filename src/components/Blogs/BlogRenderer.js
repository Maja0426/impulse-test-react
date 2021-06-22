import React, { useState, useEffect } from "react";
import Card from "../UI/Card";

const BlogRenderer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (props.keyword.length > 0) {
      foundedBlogs();
    }
  });

  const foundedBlogs = async () => {
    const res = await fetch(
      `https://impulseblog-api.herokuapp.com/api/posts?keyword=${props.keyword}`
    );
    const datas = await res.json();
    setItems(datas);
  };

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
