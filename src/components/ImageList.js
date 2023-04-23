import React from "react";
import "./ImageList.css";
import ImageShow from "./ImageShow";
const ImageList = (props) => {
  const renderList = () => {
    return props.result.map((image) => {
      return <ImageShow image={image} key={image.id} />;
    });
  };

  return <div className="parent">{renderList()}</div>;
};
 
export default ImageList;
