import React from "react";
import Article from "./Article";
import "./articles.scss";

const Articles = () => {
  return (
    <div className="articles">
      <h2>Products</h2>
      <Article position="left" />
      <Article position="right" />
    </div>
  );
};

export default Articles;
