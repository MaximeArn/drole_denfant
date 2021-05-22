import React from "react";
import Article from "./Article";
import article from "./Article";
import "./articles.scss";

const Articles = () => {
  return (
    <div className="articles">
      <h2>Products</h2>
      <Article />
      <Article />
    </div>
  );
};

export default Articles;
