import React, { useState } from "react";
import { ArticleProps } from "../../types/article";
import tshirt from "./tshirt.png";

const Article = ({ position }: ArticleProps) => {
  const [zoomPositionX, setzoomPositionX] = useState("15%");
  const [zoomPositionY, setzoomPositionY] = useState("15%");

  const handleMouthMove = ({ target, pageX, pageY }: any) => {
    const { left, top, width, height } = target.getBoundingClientRect();

    const x = Number((((pageX - left) / width) * 100).toFixed(2));
    const y = Number((((pageY - top) / height) * 100).toFixed(2));

    setzoomPositionX(`${x}%`);
    setzoomPositionY(`${y}%`);
  };

  return (
    <div className="article">
      <div className="image">
        <img
          className={position}
          src={tshirt}
          alt="purple tshirt"
          onMouseMove={(e) => handleMouthMove(e)}
        />
        <div
          className="img-zoom"
          style={{
            backgroundPositionX: zoomPositionX,
            backgroundPositionY: zoomPositionY,
          }}
        ></div>
      </div>
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
