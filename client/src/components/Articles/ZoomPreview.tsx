import React, { useEffect } from "react";

const ZoomPreview = ({ positionX, positionY }: any) => {
  useEffect(() => {
    console.log(positionX, "/", positionY);
  }, [positionX, positionY]);
  return <div id="zoomPreview" className="img-zoom"></div>;
};

export default ZoomPreview;
