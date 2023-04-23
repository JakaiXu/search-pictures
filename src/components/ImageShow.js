import React from "react";

const ImageShow = ({ image}) => {

  const renderedPic = () => {
    return (
      <div>
        <img
          src={image.urls.small}
          alt={image.description}
          className="ui medium image"
        />
      </div>
    );
  };

  return <div>{renderedPic()}</div>;
};

export default ImageShow;
