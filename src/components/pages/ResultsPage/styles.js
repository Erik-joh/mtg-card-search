import styled from "styled-components";
import { stylesVars } from "../../../stylesVars";

export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
  max-height: 75%;
  height: 100%;
  background-color: ${stylesVars.primaryBg};
  overflow: hidden;
  position: relative;
  padding: 50px;
  padding-top: 70px;
  padding-bottom: 100px;
`;
export const GeneratedCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 250px;
  background-color: ${stylesVars.secondaryBg};
  padding: 15px 15px;
  border-radius: 6px;
  & div {
    width: 100%;
    font-size: 20px;
  }
`;

export const GCardHeader = styled.div`
  background-color: ${stylesVars.gray};
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
  background-color: ${stylesVars.white};
  border-radius: 4px;
  margin-top: 2px;
  margin-bottom: 2px;
  overflow: hidden;
  & img {
    object-fit: contain;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;
export const GCardDescription = styled.div`
  height: 142px;
  background-color: ${stylesVars.gray};
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
  background-color: ${stylesVars.darkGray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditSearch = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
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
export const IncDecContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin-top: 15px;
  & p {
    display: flex;

    align-items: center;
    height: 30px;
    color: ${stylesVars.white};
    margin: 0px auto;
  }
  & button {
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-radius: 5px;
    background-color: ${stylesVars.primaryBg};
    &:first-of-type {
      border-right: 15px solid ${stylesVars.secondaryBg};
      border-left: transparent;
      &:hover {
        border-right: 15px solid ${stylesVars.white};
      }
    }
    &:last-of-type {
      border-left: 15px solid ${stylesVars.secondaryBg};
      border-right: transparent;
      &:hover {
        border-left: 15px solid ${stylesVars.white};
      }
    }
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
export const LoadingContainer = styled.div`
  width: 200px;
  height: 200px;
  & img {
    width: 100%;
    animation: rotation 6s infinite linear;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
export const NoImage = styled.div`
  background-color: ${stylesVars.white};
  height: 180px;
  border-radius: 4px;
  margin: 2px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    opacity: 50%;
    width: 80%;
  }
`;
export const FailedToLoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 300px;
  height: 150px;
  border-radius: 5px;
  background-color: ${stylesVars.primaryBg};
  & h1 {
    color: ${stylesVars.white};
    margin-bottom: 20px;
  }
  & a {
    text-decoration: none;
    color: inherit;
  }
`;
