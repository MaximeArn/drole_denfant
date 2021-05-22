import React from "react";
import { ArticleProps } from "../../types/article";
import tshirt from "./tshirt.png";

const Article = ({ position }: ArticleProps) => {
  return (
    <div className="article">
      <img className={position} src={tshirt} alt="purple tshirt" />
      <div className="article-text">
        <h3>Name</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti eaque placeat
          officia libero ut sit eius voluptatum, quia animi vero nihil ab itaque cum quas
          quos aperiam, nobis voluptatibus quam.
        </p>
        <p className="price">
          <strong>price : $40</strong>
        </p>
        <button className="buyBtn">Acheter</button>
      </div>
    </div>
  );
};

export default Article;
