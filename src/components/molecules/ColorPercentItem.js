import React from "react";
import { ColorPercentItemContainer } from "../pages/ResultsPage/styles";
const ColorPercentItem = ({ backgroundColor, textColor, percent }) => {
  return (
    <ColorPercentItemContainer
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <p>{percent}%</p>
    </ColorPercentItemContainer>
  );
};
export default ColorPercentItem;
