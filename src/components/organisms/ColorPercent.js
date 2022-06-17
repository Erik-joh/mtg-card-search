import React from "react";
import { ColorPercentContainer } from "../pages/ResultsPage/styles";
import ColorPercentItem from "../molecules/ColorPercentItem";

const ColorPercent = ({ colorPercentItems }) => {
  return (
    <ColorPercentContainer>
      {colorPercentItems.map(({ percent, textColor, backgroundColor, id }) => {
        return (
          <ColorPercentItem
            key={id}
            percent={percent}
            textColor={textColor}
            backgroundColor={backgroundColor}
          />
        );
      })}
    </ColorPercentContainer>
  );
};
export default ColorPercent;
