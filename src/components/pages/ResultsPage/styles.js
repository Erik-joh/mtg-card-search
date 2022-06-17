import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
  max-height: 80%;
  height: 100%;
  background-color: #534359;
  overflow: hidden;
  position: relative;
  padding: 50px;
`;
export const GeneratedCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  background-color: #342a38;
  padding: 15px 25px;
  border-radius: 6px;
  & div {
    width: 100%;
    font-size: 20px;
  }
`;

export const GCardHeader = styled.div`
  background-color: #c2c2c2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  height: 30px;
  border-radius: 4px;
  & p {
    font-size: 20px;
  }
`;
export const GCardImage = styled.div`
  height: 180px;
  background-color: white;
  border-radius: 4px;
  margin-top: 2px;
  margin-bottom: 2px;
  overflow: hidden;
  & img {
    object-fit: contain;
    width: 100%;
  }
`;
export const GCardDescription = styled.div`
  height: 120px;
  background-color: #c2c2c2;
  margin-top: 2px;
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GCardPT = styled.p`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 60px;
  height: 30px;
  border-radius: 4px;
  background-color: #9e9e9e;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const EditSearch = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
  background-color: white;
  height: 40px;
  width: 120px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    text-decoration: none;
    color: black;
  }
`;
export const CardsCarouselContainer = styled.div`
  height: 500px;
  & div {
    height: 418px;
    overflow: hidden;
  }
`;
export const CardContainer = styled.div`
  width: 300px;
  & img {
    width: 100%;
    object-fit: cover;
  }
`;
export const ColorPercentContainer = styled.div`
  width: 80%;
  padding: 30px 0px;
  display: flex;
  justify-content: center;
  background-color: #342a38;
`;
export const ColorPercentItemContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => `${props.backgroundColor}`};
  & p {
    color: ${(props) => `${props.textColor}`};
    font-size: 20px;
  }
`;
