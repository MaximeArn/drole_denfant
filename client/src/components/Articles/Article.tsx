import React from "react";
import tshirt from "./tshirt.jpeg";

const Article = () => {
  return (
    <div className="article">
      <img src={tshirt} alt="purple tshirt" />
      <div className="article-text">
        <h3>Name</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti eaque placeat
          officia libero ut sit eius voluptatum, quia animi vero nihil ab itaque cum quas
          quos aperiam, nobis voluptatibus quam.
        </p>
      </div>
    </div>
  );
};

export default Article;
