import React from "react";
import { RandomCardImageContainer } from "../pages/SearchPage/styles";

const RandomCardImage = ({ onClick, imageUrl, altText }) => {
  return (
    <RandomCardImageContainer>
      <div>
        <img src={imageUrl} alt={altText} />
      </div>
      <div>
        <button onClick={onClick}>Get random image</button>
      </div>
    </RandomCardImageContainer>
  );
};
export default RandomCardImage;
