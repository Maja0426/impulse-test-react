import React from "react";

import "./Jumbotron.css";

const Jumbotron = (props) => {
  const classes = `jumbotron ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Jumbotron;
