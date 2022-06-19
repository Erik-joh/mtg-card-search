import React from "react";
import {
  RandomCardImageContainer,
  RoundButton,
  ImageField,
} from "../pages/SearchPage/styles";
import noImage from "../../icons/no-image.png";
import { NoImage } from "../pages/ResultsPage/styles";

const RandomCardImage = ({ onClick, imageUrl, altText, errorMsg }) => {
  return (
    <RandomCardImageContainer>
      <ImageField>
        <label>Image</label>
        {imageUrl !== "" ? (
          <img src={imageUrl} alt={altText} />
        ) : (
          <NoImage>
            <img src={noImage} alt="default" />
          </NoImage>
        )}
        <p>{errorMsg}</p>
      </ImageField>
      <div>
        <RoundButton className onClick={onClick}>
          Get random image
        </RoundButton>
      </div>
    </RandomCardImageContainer>
  );
};
export default RandomCardImage;
