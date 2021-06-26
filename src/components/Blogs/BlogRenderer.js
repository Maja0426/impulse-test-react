import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import Loader from "../UI/Loader";

const BlogRenderer = ({ keyword }) => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    foundBlogs();
  }, [keyword]);

  const foundBlogs = async () => {
    try {
      if (keyword.length > 0) {
        const res = await fetch(
          `https://impulseblog-api.herokuapp.com/api/posts?keyword=${keyword}`
        );
        setItems(await res.json());
      } else {
        const res = await fetch(
          `https://impulseblog-api.herokuapp.com/api/posts`
        );
        setItems(await res.json());
      }
      setLoading(true);
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };

  return (
    <React.Fragment>
      {!loading ? (
        <Loader />
      ) : (
        <article>
          {items.map(({ _id, title, author, body, tags }) => (
            <Card
              key={_id}
              title={title}
              author={author}
              body={body}
              tags={tags}
            />
          ))}
        </article>
      )}
    </React.Fragment>
  );
};

export default BlogRenderer;
